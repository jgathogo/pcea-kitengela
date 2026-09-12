# PCEA Kitengela Parish website

Official site of **PCEA Kitengela Parish** (Presbyterian Church of East Africa), meant for [https://pceakitengela.or.ke](https://pceakitengela.or.ke).

This is a static site: HTML, CSS, a little JavaScript. It is hosted on the same Hetzner VPS and Caddy pattern as [pceaburu.org](https://pceaburu.org).

Kitengela is a **multi-congregation parish**. The Session covers six churches. The parish office is at **PCEA Kitengela Township Church**, Nairobi-Namanga Road.

## Congregations

1. Kitengela Township (mother church and parish office)
2. Stoni Athi
3. Bethsaida
4. Ebenezar
5. Neema
6. Bethel

## Local preview

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080.

## Deploy

Infrastructure lives in `~/Documents/vps-infra`. After this repo is pushed to GitHub:

```bash
cd ~/Documents/vps-infra
./deploy.sh pceakitengela
```

## DNS

Official hostname: **pceakitengela.or.ke** (not `.org`). The old `.org` WordPress box is a different name.

Check MX before pointing the website A records. If parish mail is `info@pceakitengela.or.ke`, leave MX / SPF / DKIM / DMARC alone.

Until the official name is pointed here, preview on `kitengela.gathogo.co.ke` (A record to `204.168.151.133`, DNS only).

When ready (grey cloud / DNS only):

| Type | Name | Content | Proxy |
|------|------|---------|--------|
| A | `@` | `204.168.151.133` | DNS only |
| A | `www` | `204.168.151.133` | DNS only |

## Facts used

- Kajiado Presbytery; minister listed on [pcea.or.ke](https://pcea.or.ke/pcea-nairobi-region-presbyteries/): Rev. John K. Muhinyia
- Email: info@pceakitengela.or.ke (change if the Session still uses another mailbox)
- Postal: P.O. Box 228-00242, Kitengela (2026 Session audit letter)
- Office phone: +254 710 287930 (public listing for Township Church)
- History: 2001 outreach from Athi River; parish 24 Oct 2010; to Kajiado Presbytery 26 Oct 2014

Fill street pins and Sunday hours for the five younger congregations when the LCCs confirm them.
