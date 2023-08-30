resource "local_file" "ansible-inventory-file" {
  filename = "../ansible/hosts.yml"
  content = <<-EOT
    server:
      hosts: ${digitalocean_record.main-domain-root.fqdn}
  EOT
}