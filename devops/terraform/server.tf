resource "digitalocean_droplet" "ib-server" {
  image = "ubuntu-22-04-x64"
  name = "ib-server"
  region = "sfo3"
  size = "s-1vcpu-1gb-intel"
  ssh_keys = [
    digitalocean_ssh_key.main-key.fingerprint
  ]
}

resource "digitalocean_reserved_ip" "ib-main-ip" {
  region = "sfo3"
  droplet_id = digitalocean_droplet.ib-server.id
}

resource "digitalocean_domain" "default" {
  name = var.domain
}

resource "digitalocean_record" "main-domain-root" {
  domain = digitalocean_domain.default.id
  type = "A"
  name = "@"
  value = digitalocean_reserved_ip.ib-main-ip.ip_address
}

resource "digitalocean_record" "main-domain-api" {
  domain = digitalocean_domain.default.id
  type = "A"
  name = "api"
  value = digitalocean_reserved_ip.ib-main-ip.ip_address
}


resource "digitalocean_volume" "ib-names-vol" {
  region = "sfo3"
  name = "ib-names"
  size = 5
  initial_filesystem_type = "ext4"
  description = "volume for names for the indexing-brain"
}

resource "digitalocean_volume_attachment" "ib-names-vol-to-ib-server" {
  droplet_id = digitalocean_droplet.ib-server.id
  volume_id = digitalocean_volume.ib-names-vol.id
}
