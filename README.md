# awssgip2c

A *very* simple chrome extension for EC2 security groups **that maps IP-addresses to countreis in EC2 console**.

## Usage

0. Install the Chrome extension (unpacked, using Chrome settings)
1. Go to AWS console (EC2)
2. Open a security group for EDITING (like "group X - Inbound - Edit"
3. Click the extension button in Chrome
4. You'll see country codes appearing next to IP addresses

## Why do I need this?

Say you went on vacation or a business trip. And you had to SSH (or RDP) to your server from a hotel. But SSH is closed by your security group. You've added your current IP address to the security group. And forgot about it.

Now, after a year or so you see over a dozen rules and can't tell what's what. This is when this extension comes handy.
