const stateMock ={
    newCustomer: {
      isActive: true,
      company: "",
      industry: "",
      about: "",
      projects: [
        {
          id: "b9cb6843-a85c-66e3-334f-1ae50c82cc57",
          name: "",
          contact: "",
          start_date: null,
          end_date: null,
        },
      ],
    },
    editCustomer: {
      id: "",
      isActive: true,
      company: "",
      industry: "",
      about: "",
      projects: [
        {
          id: "",
          name: "",
          contact: "",
          start_date: null,
          end_date: null,
        },
      ],
    },
    customers: {
      customersList: [
        {
          id: "1798e668-8eb3-424f-8af7-6e6da2515b14",
          isActive: true,
          company: "Doyle-Kessler",
          industry: "travel",
          projects: [
            {
              id: "e25fc621-1aed-4898-9714-090f300c75c8",
              name: "Grass-roots",
              contact: "fsimony1@hostgator.com",
              start_date: "2021-10-05T07:33:02Z",
              end_date: "2022-05-30T10:40:32Z",
            },
            {
              id: "64c726d0-c9a2-4a8f-a775-4340da21c721",
              name: "dynamic",
              contact: "lallibon2@bloglines.com",
              start_date: "2022-01-05T11:54:14Z",
              end_date: "2022-03-31T17:50:50Z",
            },
            {
              id: "fa93c65a-0433-479f-bcaa-27fab7b5c57d",
              name: "Ergonomic",
              contact: "shyslop3@usatoday.com",
              start_date: "2021-12-03T22:51:58Z",
              end_date: null,
            },
          ],
          about:
            "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
        },
        {
          id: "ea8294be-562d-4196-9329-79560ce84a5e",
          isActive: true,
          company: "Bahringer, Rice and Dach",
          industry: "marketing",
          projects: [
            {
              id: "1707b182-2bf7-45c2-874f-7cfa63c6d6b7",
              name: "Automated",
              contact: "kphillpotts6@sina.com.cn",
              start_date: "2021-11-07T11:23:23Z",
              end_date: null,
            },
          ],
          about:
            "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        },
        {
          id: "ea150b92-8492-4b52-9b80-78095a4bd6d5",
          isActive: true,
          company: "Haley Group",
          industry: "tech",
          projects: [
            {
              id: "60fbad93-641d-4da0-80c1-2f909ac8ca77",
              name: "Polarised",
              contact: "kferschkej@ehow.com",
              start_date: "2021-09-12T02:43:13Z",
              end_date: "2022-05-28T06:56:06Z",
            },
            {
              id: "c03f79e9-67d8-4b5e-8d90-61ecc2746042",
              name: "dynamic",
              contact: null,
              start_date: "2021-12-15T08:41:09Z",
              end_date: null,
            },
          ],
          about:
            "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
        },
        {
          id: "de616651-8488-4847-9d40-db04e8ec4df2",
          isActive: true,
          company: "Herzog-Schaefer",
          industry: "tech",
          projects: [
            {
              id: "81dc0796-e0f7-4b83-80c5-b34d2fb03e9a",
              name: "implementation",
              contact: null,
              start_date: "2021-11-12T16:38:44Z",
              end_date: null,
            },
          ],
          about:
            "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        },
        {
          id: "23a7e14a-065d-43a0-bf88-f8c581d8365a",
          isActive: true,
          company: "Sporer Inc",
          industry: "insurance",
          projects: [
            {
              id: "881e1f5a-eaa7-4031-a13f-072d9b0845cc",
              name: "multi-state",
              contact: "lgeggusi@ebay.co.uk",
              start_date: "2021-12-10T12:40:12Z",
              end_date: null,
            },
            {
              id: "ce872168-0aef-48e6-9436-1fc66fe60479",
              name: "hybrid",
              contact: "mlynettl@diigo.com",
              start_date: "2021-10-16T17:58:13Z",
              end_date: "2022-04-02T14:53:21Z",
            },
          ],
          about:
            "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
        },
        {
          id: "ede3e3be-ebba-4465-a3a0-741a85334570",
          isActive: true,
          company: "Keebler, Ernser and Gorczany",
          industry: "tech",
          projects: [
            {
              id: "4c15be4e-b4e3-4303-8e65-abcce52d6a68",
              name: "capability",
              contact: null,
              start_date: "2021-11-20T16:00:50Z",
              end_date: null,
            },
          ],
          about:
            "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        },
        {
          id: "11526b6d-737d-432f-ad2a-7038ab37ad06",
          isActive: true,
          company: "Schimmel LLC",
          industry: "travel",
          projects: [
            {
              id: "26d96214-75a6-44d5-80ab-e4d78a0ef32b",
              name: "Exclusive",
              contact: null,
              start_date: "2021-11-30T10:32:23Z",
              end_date: null,
            },
          ],
          about:
            "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
        },
        {
          id: "65bec2ff-12cf-40a0-9458-273745f81ea3",
          isActive: true,
          company: "Braun LLC",
          industry: "marketing",
          projects: [
            {
              id: "79ac0717-3242-4978-be7b-7e7874734736",
              name: "Programmable",
              contact: "bnickersonf@state.tx.us",
              start_date: "2022-01-18T06:09:31Z",
              end_date: null,
            },
          ],
          about:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        },
        {
          id: "96cdb02e-3c21-44ce-93ea-e3b458c55061",
          isActive: true,
          company: "Mohr, Wyman and Hintz",
          industry: "finance",
          projects: [
            {
              id: "da3292ac-cece-4882-95e2-64f0e03aafaf",
              name: "incremental",
              contact: null,
              start_date: "2021-11-22T09:06:04Z",
              end_date: null,
            },
          ],
          about:
            "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        },
        {
          id: "f9c1e893-4408-4933-bdf8-bafca58da854",
          isActive: true,
          company: "Effertz, Wisoky and Macejkovic",
          industry: "insurance",
          projects: [
            {
              id: "c9ea3170-bc2b-4111-87b9-edb8ad5b6af5",
              name: "systemic",
              contact: null,
              start_date: "2021-09-09T00:11:05Z",
              end_date: null,
            },
            {
              id: "1c4cee7d-1844-4bee-b886-b281b7dd7ae0",
              name: "Implemented",
              contact: "jhousbies@zdnet.com",
              start_date: "2021-09-22T14:17:55Z",
              end_date: "2022-06-26T20:58:16Z",
            },
          ],
          about:
            "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
        },
        {
          id: "0f59db8f-4f8d-4eba-b87f-e7304c89d3b8",
          isActive: true,
          company: "Kutch Inc",
          industry: "marketing",
          projects: [
            {
              id: "7410fb20-994a-4afa-a185-2d0404673e0d",
              name: "Customer-focused",
              contact: null,
              start_date: "2021-10-20T19:28:03Z",
              end_date: null,
            },
          ],
          about:
            "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
        },
      ],
      filteredList: [
        {
          id: "1798e668-8eb3-424f-8af7-6e6da2515b14",
          isActive: true,
          company: "Doyle-Kessler",
          industry: "travel",
          projects: [
            {
              id: "e25fc621-1aed-4898-9714-090f300c75c8",
              name: "Grass-roots",
              contact: "fsimony1@hostgator.com",
              start_date: "2021-10-05T07:33:02Z",
              end_date: "2022-05-30T10:40:32Z",
            },
            {
              id: "64c726d0-c9a2-4a8f-a775-4340da21c721",
              name: "dynamic",
              contact: "lallibon2@bloglines.com",
              start_date: "2022-01-05T11:54:14Z",
              end_date: "2022-03-31T17:50:50Z",
            },
            {
              id: "fa93c65a-0433-479f-bcaa-27fab7b5c57d",
              name: "Ergonomic",
              contact: "shyslop3@usatoday.com",
              start_date: "2021-12-03T22:51:58Z",
              end_date: null,
            },
          ],
          about:
            "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
        },
        {
          id: "ea8294be-562d-4196-9329-79560ce84a5e",
          isActive: true,
          company: "Bahringer, Rice and Dach",
          industry: "marketing",
          projects: [
            {
              id: "1707b182-2bf7-45c2-874f-7cfa63c6d6b7",
              name: "Automated",
              contact: "kphillpotts6@sina.com.cn",
              start_date: "2021-11-07T11:23:23Z",
              end_date: null,
            },
          ],
          about:
            "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        },
        {
          id: "ea150b92-8492-4b52-9b80-78095a4bd6d5",
          isActive: true,
          company: "Haley Group",
          industry: "tech",
          projects: [
            {
              id: "60fbad93-641d-4da0-80c1-2f909ac8ca77",
              name: "Polarised",
              contact: "kferschkej@ehow.com",
              start_date: "2021-09-12T02:43:13Z",
              end_date: "2022-05-28T06:56:06Z",
            },
            {
              id: "c03f79e9-67d8-4b5e-8d90-61ecc2746042",
              name: "dynamic",
              contact: null,
              start_date: "2021-12-15T08:41:09Z",
              end_date: null,
            },
          ],
          about:
            "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
        },
        {
          id: "de616651-8488-4847-9d40-db04e8ec4df2",
          isActive: true,
          company: "Herzog-Schaefer",
          industry: "tech",
          projects: [
            {
              id: "81dc0796-e0f7-4b83-80c5-b34d2fb03e9a",
              name: "implementation",
              contact: null,
              start_date: "2021-11-12T16:38:44Z",
              end_date: null,
            },
          ],
          about:
            "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        },
        {
          id: "23a7e14a-065d-43a0-bf88-f8c581d8365a",
          isActive: true,
          company: "Sporer Inc",
          industry: "insurance",
          projects: [
            {
              id: "881e1f5a-eaa7-4031-a13f-072d9b0845cc",
              name: "multi-state",
              contact: "lgeggusi@ebay.co.uk",
              start_date: "2021-12-10T12:40:12Z",
              end_date: null,
            },
            {
              id: "ce872168-0aef-48e6-9436-1fc66fe60479",
              name: "hybrid",
              contact: "mlynettl@diigo.com",
              start_date: "2021-10-16T17:58:13Z",
              end_date: "2022-04-02T14:53:21Z",
            },
          ],
          about:
            "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
        },
        {
          id: "ede3e3be-ebba-4465-a3a0-741a85334570",
          isActive: true,
          company: "Keebler, Ernser and Gorczany",
          industry: "tech",
          projects: [
            {
              id: "4c15be4e-b4e3-4303-8e65-abcce52d6a68",
              name: "capability",
              contact: null,
              start_date: "2021-11-20T16:00:50Z",
              end_date: null,
            },
          ],
          about:
            "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        },
        {
          id: "11526b6d-737d-432f-ad2a-7038ab37ad06",
          isActive: true,
          company: "Schimmel LLC",
          industry: "travel",
          projects: [
            {
              id: "26d96214-75a6-44d5-80ab-e4d78a0ef32b",
              name: "Exclusive",
              contact: null,
              start_date: "2021-11-30T10:32:23Z",
              end_date: null,
            },
          ],
          about:
            "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
        },
        {
          id: "65bec2ff-12cf-40a0-9458-273745f81ea3",
          isActive: true,
          company: "Braun LLC",
          industry: "marketing",
          projects: [
            {
              id: "79ac0717-3242-4978-be7b-7e7874734736",
              name: "Programmable",
              contact: "bnickersonf@state.tx.us",
              start_date: "2022-01-18T06:09:31Z",
              end_date: null,
            },
          ],
          about:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        },
        {
          id: "96cdb02e-3c21-44ce-93ea-e3b458c55061",
          isActive: true,
          company: "Mohr, Wyman and Hintz",
          industry: "finance",
          projects: [
            {
              id: "da3292ac-cece-4882-95e2-64f0e03aafaf",
              name: "incremental",
              contact: null,
              start_date: "2021-11-22T09:06:04Z",
              end_date: null,
            },
          ],
          about:
            "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        },
        {
          id: "f9c1e893-4408-4933-bdf8-bafca58da854",
          isActive: true,
          company: "Effertz, Wisoky and Macejkovic",
          industry: "insurance",
          projects: [
            {
              id: "c9ea3170-bc2b-4111-87b9-edb8ad5b6af5",
              name: "systemic",
              contact: null,
              start_date: "2021-09-09T00:11:05Z",
              end_date: null,
            },
            {
              id: "1c4cee7d-1844-4bee-b886-b281b7dd7ae0",
              name: "Implemented",
              contact: "jhousbies@zdnet.com",
              start_date: "2021-09-22T14:17:55Z",
              end_date: "2022-06-26T20:58:16Z",
            },
          ],
          about:
            "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
        },
        {
          id: "0f59db8f-4f8d-4eba-b87f-e7304c89d3b8",
          isActive: true,
          company: "Kutch Inc",
          industry: "marketing",
          projects: [
            {
              id: "7410fb20-994a-4afa-a185-2d0404673e0d",
              name: "Customer-focused",
              contact: null,
              start_date: "2021-10-20T19:28:03Z",
              end_date: null,
            },
          ],
          about:
            "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
        },
      ],
    },
  }

  export default stateMock;
  