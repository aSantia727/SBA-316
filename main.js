const wrapSetting = document.getElementById("wrap");
wrapSetting.style.width = "940px";
wrapSetting.style.height = "auto";
wrapSetting.style.border = "5px solid black"
wrapSetting.style.marginLeft = "auto";
wrapSetting.style.marginRight = "auto";
wrapSetting.style.marginTop = "-9px";
wrapSetting.style.backgroundColor = "#F1EBE1";

console.log(wrapSetting.outerHTML);

const headerDiv = document.querySelector("#header");
headerDiv.className= "headerFont";
headerDiv.style.border = "1px solid #D3D3D3";
headerDiv.style.height = "200px";
headerDiv.textContent = ("SBA-316");

const oldestChild = document.querySelector(".whatMustBeDone")
oldestChild.textContent=
("This assessment measures your understanding of the Document Object Model (DOM) and your capability to implement its features in a practical manner. You have creative freedom in the topic, material, and purpose of the web application you will be developing, so have fun with it! However, remember to plan the scope of your project to the timeline you have been given.  This assessment has a total duration of two (2) days. This is a take-home assessment. You have two total days (including weekends and holidays) to work on this assessment. This assessment will be due at 5:00pm on the second day after it is assigned. Your instructor may provide you with class time to work on the assessment, schedule permitting.");

oldestChild.className= "basicFont";

const bodyOfText = document.getElementsByClassName("whatMustBeDone");

function tableGrade(data) {
    const table = document.createElement('table');
  
    for (let rowData of data) {
      const row = document.createElement('tr');
      for (let cellData of rowData) {
        const cell = document.createElement('td');
        cell.textContent = cellData;
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  
    document.getElementById('tableContainer').appendChild(table);
  }
  
  const tableData = [
    ['Requirement', 'Weight'],
    ['Cache at least one element using selectElementById.', '5%'],
    ['Cache at least one element using querySelector or querySelectorAll.', '5%'],
    ['Create at least one element using createElement.', '5%'],
    ['Modify at least one attribute of an element in response to user interaction.', '3%'],
    ['Commit frequently to the git repository.', '5%']
  ];
  
  console.log(tableGrade(tableData));