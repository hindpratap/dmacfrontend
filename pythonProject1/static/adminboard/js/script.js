var data1 = [
  {
    Name: "Kartik Chauhan",
    Skills: "",
    Technology: "",
    TaxID: "",
    City: "Varanasi",
    CountryCode: 91,
    Phone: 343423423,
    Email: "cpandey@mckinsol.com",
  },
  {
    Name: "Chandan Pandey",
    Skills: "Frontend Consultant",
    Technology: "Angular",
    TaxID: 45566,
    City: "",
    CountryCode: 1,
    Phone: 12345522,
    Email: "panday@mckinsol.com",
  },
  {
    Name: "Anurag Varshney",
    Skills: "SAP Consultant",
    Technology: "SAP S/4 Fashion",
    TaxID: 12345,
    City: "Edison NJ",
    CountryCode: 1,
    Phone: 7323190072,
    Email: "avarshney@mckinsol.com",
  },
  {
    Name: "Abhinav Asati",
    Skills: "Frontend Consultant",
    Technology: "Angular",
    TaxID: 23456,
    City: "Smbalpur",
    CountryCode: 91,
    Phone: 123455,
    Email: "aasati@mckinsol.com",
  },
  {
    Name: "Sukirti Mishra",
    Skills: "Frontend Consultant",
    Technology: "Angular",
    TaxID: 34567,
    City: "Chatarpur",
    CountryCode: 91,
    Phone: 34567,
    Email: "smishra@mckinsol.com",
  },
];

var data2 = [
  {
    No: 1,
  },
  {
    No: 2,
  },
  {
    No: 3,
  },
];

var cols = ["No"];
let field;
let data = data2;

function deployData() {
  var tbdata1 = "",
    tbdata2 = "";

  for (let i = 0; i < data1.length; i++) {
    tbdata1 +=
      "<tr>" +
      "<td>" +
      data1[i].Name +
      "</td>" +
      "<td>" +
      data1[i].Skills +
      "</td>" +
      "<td>" +
      data1[i].Technology +
      "</td>" +
      "<td>" +
      data1[i].TaxID +
      "</td>" +
      "<td>" +
      data1[i].City +
      "</td>" +
      "<td>" +
      data1[i].CountryCode +
      "</td>" +
      "<td>" +
      data1[i].Phone +
      "</td>" +
      "<td>" +
      data1[i].Email +
      "</td>" +
      "</tr>";
  }
  tbdata2 += "<thead>";
  for (let k = 0; k < cols.length; k++) {
    tbdata2 +=
      "<td ondrop='drop(event)' ondragover='allowDrop(event)'>" +
      cols[k] +
      "</td>";
  }
  tbdata2 += "</thead>";
  for (let j = 0; j < data.length; j++) {
    tbdata2 += "<tr>";
    for (let x = 0; x < cols.length; x++) {
      tbdata2 += "<td>" + data[j][cols[x]] + "</td>";
    }
    tbdata2 += "</tr>";
  }
  document.getElementById("tb1").innerHTML = tbdata1;
  document.getElementById("tb2").innerHTML = tbdata2;

  field = "";
}

deployData();

function allowDrop(ev) {
  ev.preventDefault();
}
function drag(e) {
  field = e.target.innerHTML;
}
function drop(e) {
  e.preventDefault();
  var dropField = e.target.innerHTML;
  var index = cols.indexOf(dropField);
  if (cols.indexOf(field) == -1) {
    cols.splice(index + 1, 0, field);
  }
  for (let i = 0; i < data2.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (cols[j] == "No") {
        data[i].No = data2[i].No;
      } else {
        data[i][cols[j]] = data1[i][cols[j]];
      }
    }
  }
  console.log("table2", data);
  deployData();
}
