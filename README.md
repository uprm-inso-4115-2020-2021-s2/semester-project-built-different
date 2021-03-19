# RUM 2 Go <img src="server/images/RUM2GO-logo(RMV).png" alt="Rum2go logo" width="100" height="100">
  
## Table of Content
- [Why](#why?)
- [What are we using?](#what-are-we-using)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)
- [Styling Guide](#styling-guide)
- [References](#references)
- [Contributors](#contributors)
## Why?
As consumers of the RUM cafeteria, a lack of efficient and flexible service has been noted. 
We have taken the task to develop a simple, user friendly web-app that will fullfil the students desires to order food without the need to be present in the crowded, small, cafeteria but still consume and enjoy its products.

## What are we using?
A quick recap of the tools that were used for this program. 
### Next.Js
    A React Framework that provides easy building tools for hybrid applications. 
    some of its benefits include Server Side Rendering, Excellent Search Engine Optimization capabilities, and amazing scalability opportunities
### Postgresssql
    A common database in the industry, giving the team experience using it. 
### Jest
    For testing the web-app.
### Node.js and Express.js
    It has amazing integrated libraries that make the process of building APIs very easy.
## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

1. First, run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

* Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

* [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

* The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
## How to run
To learn more about Next.js, take a look at the following resources:
## Vercel - Deployment
### What is vercel and why are we using it
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
## Styling Guide
```diff
Colors to use: 
    #53AB4B
    #F6F6F6
    #030803
    #86EC7D
```
## RUM2GO - THE APP
The web app wil be accessible through any device with access to the internet. Now, we will breakdown the different pages that will be accessible to the customers. 
### Sign Up Page
    This will provide a simple form that customers and cafeteria employees will use to create their accounts.
### Admin Page
    As this app will be used by consumers and providers just the same, an admin page will provide access for the cafeteria employees into the active orders and any process they would need to follow on. 
### Login Page
    After your account is created, this step will not be required again and instead will access the account from the login page. Here the user will need to provide their email and chosen password. 
### Home Page
    When the user log's in, they will be redirected to this page where they will be able to start their order. This will also provide a highlighted section for any special offers for the day and a summary for the recurrent orders. The Home Page will also provide easy access to the different food stations provided by the cafeteria. 
### Food Detail Page
    A detailed view of the individual food item the user can order will be showed. From here they can add it to their tray.
### Cart Page
    The Cart Page will provide a summary of your current order and the total, where you can go and checkout, placing your order.
### Checkout Page
    After you place your order you will need to provide a method of payment from the predetermined options. If the method of payment is not cash, the user will also use this page to provide the respective information for their credit card and continue to pay.
### Settings Page
    Every account will be provided a detailed Settings Page where they can edit their profiles, see their order history, manage their account, seek help and support or change their preferred payment method. 
### Receipt Page
    After the user places and pays an order they will be redirected to the Receipt Page. The user will be able to see their order number and the status of payment. When the user gos to pick up their order, they can show this page to the employee, confirming if their order has been payed for or if they will be paying cash for their order.
## References
* [the Next.js GitHub repository](https://github.com/vercel/next.js/)
* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
## Contributors
- [Emma S. Domínguez Arocho](https://github.com/Emma098)
- [Christian E. Rosado Feliciano](https://github.com/christianrosado20)
- [Luis F. Caro Monroig](https://github.com/luiscaro1)
- [Anthony J. Marquez Camacho](https://github.com/anthonyjmc)
- [Valerie E. Reyes Ortiz](https://github.com/valeriereyes5)
- [Songimar García Curbelo](https://github.com/sxngie)
- [Nomar I. Medina Dávila](https://github.com/medinanomar)
- [Carolina G. Santiago Perez](https://github.com/)
- [Yeniel J. Diaz Nievez](https://github.com/YenielDiaz)
# semester-project-built-different
You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
