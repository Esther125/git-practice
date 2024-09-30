# Cloud native system development and maintenance HW3

## Table of Content

-   [x] A. AWS Region Concepts Introduction
    -   [x] A.1 Introduction of AWS Region, AZ (availability zones)
    -   [x] A.2 Which AWS region should I choose when using AWS services?
-   [x] B. Callback & Promise Practice
    -   [x] [Callback Function Practice](./callback.js)
    -   [x] (Advanced) [Improve the previous practice with Promise](promise.js)
-   [ ] C. Build Express Project
    -   [x] Build [backend folder](/backend/)
    -   [x] npm init
    -   [x] npm install express
    -   [ ] Observations of `package.json` & `node_modules`
    -   [x] Build `app.js`
    -   [x] Verifying the Server is Running
    -   [x] Modify the Port Number Using Environment Variables
-   [ ] Observations and usages of `package.json`
    -   [ ] What are dependencies and devDependencies in `package.json`?
    -   [ ] How to use the scripts block in scripts `package.json`?
-   [ ] Best practices for managing files in a GitHub repository
    -   [ ] Which files should be included in a GitHub repository and which should be excluded?
    -   [ ] Why?
-   [ ] Import modules in JavaScript: CJS vs ESM
    -   [ ] Introduction
    -   [ ] How to use?
-   [ ] (Advanced) What is localhost?
-   [ ] (Advanced) Curl Introduction
    -   [ ] What is curl?
    -   [ ] How to use curl to test network connections?
    -   [ ] What are the common parameters?

## A. AWS Concepts Introduction

### A.1 Introduction of AWS Region & AZs (Availability Zones)

![aws_availability_zones_vs_regions](../images//week-03/aws_availability_zones_vs_regions.png)

-   **Region:** A geographical area consisting of multiple isolated locations called Availability Zones. Each region operates independently to provide services.
-   **Availability Zones (AZs):** Independent and isolated data centers within a region, designed to ensure high availability and fault tolerance.
-   **Comparison:**

    | **Criteria**            | **Region**                                                                                                   | **Availability Zones (AZs)**                                                    |
    | ----------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
    | **Definition**          | A geographical area containing multiple AZs.                                                                 | Independent data centers within a region.                                       |
    | **When to Use**         | When you need to reduce latency, meet compliance, or optimize costs across different geographical locations. | When you need high availability and redundancy within the same region.          |
    | **Example (Region/AZ)** | **Region**: Asia Pacific (Tokyo)                                                                             | **AZ**: ap-northeast-1a, ap-northeast-1b                                        |
    | **Switching Cost**      | Yes, switching regions may incur different service pricing.                                                  | No, switching between AZs in the same region generally does not change pricing. |

### A.2 Which AWS region should I choose when using AWS services?

-   **Gaming Industry**

    -   Key factor: **Latency**
    -   Region: Select a region **close to your primary player base** to reduce response time.
    -   Example: If most of your players are in Asia, choose a region like _Asia Pacific (Tokyo)_ or _Asia Pacific (Seoul)_ to provide a better gaming experience.

-   **Financial Sector**

    -   Key factor: **Regulation**
    -   Region: Choose a **region where the data center is located within your country** or where the **financial regulations allow**.

-   **Startups and Individual Users**

    -   Key factor: **Cost-efficiency**
    -   Region: Opt for regions that offer **lower pricing**
    -   Example: Regions like _US East (N. Virginia)_ typically provide more affordable service rates since the region is close to AWS's headquarters and major data centers.

-   **Important factors for every industry and user**

    -   **Service Availability**

        Not all AWS services are available in every region, particularly newer services or advanced features. Before selecting an AWS region, it's important to verify that the region offers the specific services you need.

    -   **Disaster Recovery & Fault Tolerance**
        If your application requires high availability and fault tolerance, selecting an AWS region with multiple AZs is crucial.

To sum up, the factors we need to take into consideration when choosing AWS Region are:

-   Latency
-   Regulation
-   Cost-efficiency
-   Service Availability
-   Disaster Recovery & Fault Tolerance

## C. Build Express Project

### Observations of `package.json` & `node_modules`

### Verifying the Server is Running

I added a start script in the `package.json` file, allowing me to start the server using `npm start`. After running the command, I visited http://localhost:3000/ and saw the following output:

![Result](../images/week-03/verify-server.png)

This confirms that the server is running successfully.

### Modify the Port Number Using Environment Variables

To make the port configurable through environment variables, follow these steps:

1. Create a .env file with the following content to define the port number:
    ```
    PORT=4000
    ```
2. Install dotenv by running the following command:
    ```
    npm install dotenv
    ```
3. Update `app.js` to load environment variables and set the port:

    ```
    // Load dotenv to use the settings in the .env file
    require("dotenv").config();

    // Set the default port to 3000
    // If a port is defined in the .env file, use that value instead
    const port = process.env.PORT || 3000;
    ```

![update-port](../images/week-03/update-port.png)

With this setup, you can easily change the port number by modifying the value in the `.env` file, **without having to alter the code in `app.js`**.

## Reference

-   https://www.techtarget.com/searchcloudcomputing/tip/Understand-AWS-Regions-vs-Availability-Zones
-   https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions
