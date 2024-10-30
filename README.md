# Tax RAG App

### A chatbot application built using RAG (Retrieval Augmented Generation) to query the 2023 IRS [Publication 17](https://www.irs.gov/pub/irs-pdf/p17.pdf) document in order to answer tax questions a user may have.

<a href="https://taxragapp.vercel.app/" target="_blank">Live Site</a>

<img src="readme_assets/chat.png">

Users are able to rate the bot's responses by clicking on any of the three rating buttons.

![image](/readme_assets/rating_btn_ins.png)
![image](/readme_assets/rating_btn.png)

The site is also responsive to devices of different sizes.

### Mobile
![image](/readme_assets/responsive-phone.png)
### Tablet
![image](/readme_assets/responsive-tablet.png)

## How to Run Locally

Install project dependencies:
```bash
npm install
```
Copy sample.env and insert valid value into NEXT_PUBLIC_API_GATEWAY environment variable:

```bash
cp sample.env .env
```
.env content:
```
NEXT_PUBLIC_API_GATEWAY=<localhost, ip address, or Docker container name of API Gateway>
```
Start Next.js App:
```bash
npm run start
```
Please follow the instructions for the back-end services to get the app fully working.


## Back-End Services

Below are links to the READMEs of the back-end services I created to run the app.

<a href="https://github.com/randr000/tax_llm" target="_blank">Chat Service</a><br>
<a href="https://github.com/randr000/tax_llm_node_app" target="_blank">Database and Mailer Service</a><br>
<a href="https://github.com/randr000/tax_llm_node_api_gateway" target="_blank">API Gateway</a>