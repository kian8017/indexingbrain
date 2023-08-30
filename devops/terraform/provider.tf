terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

variable "do_token" {}
variable "domain" {}
variable "ssh_public_key_file" {
  description = "path to the public ssh key (ends with .pub)"
}

variable "ssh_private_key_file" {
  description = "path to the private ssh key"
}

provider "digitalocean" {
  token = var.do_token
}

resource "digitalocean_ssh_key" "main-key" {
  name = "ib-ssh-key"
  public_key = file(var.ssh_public_key_file)
}
