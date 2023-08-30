resource "local_file" "ansible-inventory-file" {
  filename = "../ansible/hosts.yml"
  content = <<-EOT
    server:
      hosts:
        "${digitalocean_record.main-domain-root.fqdn}":
          ansible_private_key_file: "${var.ssh_private_key_file}"
  EOT
}