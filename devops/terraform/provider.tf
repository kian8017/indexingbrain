terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }

  cloud {
    organization = "kian8017"

    workspaces {
      name = "ib"
    }
  }
}

variable "do_token" {}
variable "domain" {}
variable "ssh_public_key_file" {}
variable "ssh_private_key_file" {}

provider "digitalocean" {
  token = var.do_token
}

resource "digitalocean_ssh_key" "main-key" {
  name = "ib-ssh-key"
  public_key = file(var.ssh_public_key_file)
}
