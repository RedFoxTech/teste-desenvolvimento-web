const axios = require('axios')
var Excel = require('exceljs');

var wb = new Excel.Workbook();
var path = require('path');
var filePath = path.resolve(__dirname,'../../Pokemon Go.xlsx');

let json = {}



module.exports = wb.xlsx.readFile(filePath).then(function (){

    
    var sh = wb.getWorksheet("Sheet1");

    //sh.getRow(1).getCell(2).value = 32;
    wb.xlsx.writeFile("Pokemon Go.xlsx");
    //console.log("Row-3 | Cell-2 - "+sh.getRow(3).getCell(2).value);
    
    //console.log(sh.rowCount);
    //Get all the rows data [1st and 2nd column]
    let obj = {
        table: []
    }
    for (i = 2; i <= sh.rowCount; i++) {
        obj.table.push({
            row: sh.getRow(i).getCell(1).value,
            name: sh.getRow(i).getCell(2).value,
            pokedex_number: sh.getRow(i).getCell(3).value,
            img_name: sh.getRow(i).getCell(4).value,
            generation: sh.getRow(i).getCell(5).value,
            evolution_stage: sh.getRow(i).getCell(6).value,
            evolved: sh.getRow(i).getCell(7).value,
            family_id: sh.getRow(i).getCell(8).value,
            cross_gen: sh.getRow(i).getCell(9).value,
            type_1: sh.getRow(i).getCell(10).value,
            type_2: sh.getRow(i).getCell(11).value,
            weather_1: sh.getRow(i).getCell(12).value,
            weather_2: sh.getRow(i).getCell(13).value,
            stat_total: sh.getRow(i).getCell(14).value,
            atk: sh.getRow(i).getCell(15).value,
            def: sh.getRow(i).getCell(16).value,
            sta: sh.getRow(i).getCell(17).value,
            legendary: sh.getRow(i).getCell(18).value,
            aquireable: sh.getRow(i).getCell(19).value,
            spawns: sh.getRow(i).getCell(20).value,
            regional: sh.getRow(i).getCell(21).value,
            raidable: sh.getRow(i).getCell(22).value,
            hatchable: sh.getRow(i).getCell(23).value,
            shiny: sh.getRow(i).getCell(24).value,
            nest: sh.getRow(i).getCell(25).value,
            new: sh.getRow(i).getCell(26).value,
            not_gettable: sh.getRow(i).getCell(27).value,
            future_evolve: sh.getRow(i).getCell(28).value,
            cem_por_cento_CP_40: sh.getRow(i).getCell(29).value,
            cem_por_cento_CP_39: sh.getRow(i).getCell(30).value
        })
                
    }
    try {
        return json = JSON.stringify(obj)
    } catch (error) {
        console.log(error)  
    }
})