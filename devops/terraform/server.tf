resource "digitalocean_droplet" "ib-server" {
  image = "ubuntu-22-04-x64"
  name = "ib-server"
  region = "sfo3"
  size = "s-1vcpu-512mb-10gb"
  ssh_keys = [
    data.digitalocean_ssh_key.terraform.id
  ]

  connection {
    host = self.ipv4_address
    user = "root"
    type = "ssh"
    private_key = file(var.pvt_key)
    timeout = "2m"
  }
}

resource "digitalocean_domain" "default" {
  name = "indexbrain.org"
}
