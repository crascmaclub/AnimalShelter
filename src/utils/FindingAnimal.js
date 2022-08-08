import $ from 'jquery';

export function findSpeciesInArea(posX, posY, data) {
    // console.log("RUN FIND SPECIES IN AREA")
    //Cho toạ độ vào đây, giữ nguyên tham số cuối
    // var point = WorldToTilePos(105.794779, 20.962152, 14);
    var point = WorldToTilePos(posX, posY, 14);
    // console.log("pointX: ",point.X,"pointY",point.Y)
    
    //Các loài sẽ xuất hiện
    var occurrence = [];

    const checkFileExist = async (url) => {
        setTimeout(() => {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: 'https://projectespapi.herokuapp.com/checkExistFile?url=' + url,
                success: function (data) {
                    // console.log(data);
                    return data
                }
            })
        }, 14000)

    }
    var tiepGiap = new Array();
    tiepGiap[0] = new Array(0, 0);
    tiepGiap[1] = new Array(1, -1);
    tiepGiap[2] = new Array(1, 0);
    tiepGiap[3] = new Array(1, 1);
    tiepGiap[4] = new Array(0, 1);
    tiepGiap[5] = new Array(-1, 1);
    tiepGiap[6] = new Array(-1, 0);
    tiepGiap[7] = new Array(-1, -1);
    tiepGiap[8] = new Array(0, -1);
    for (var j = 0; j < data.length; j++) {
        if (data[j].usageKey == 0) continue;
        for (var i = 0; i < 9; i++) {
            // console.log("are u there",j)
            var firstX = point.X + tiepGiap[i][0];
            var secondY = point.Y + tiepGiap[i][1];
            // console.log(firstX ," " , point.Y)
            let url = `./mapData/${data[j].usageKey}/14/` + firstX + '/' + secondY + ".mvt";
            // console.log(url)
            // let checkFile = 
            // let checkFile = checkFileExist(j)
            // console.log(checkFile)

            if (checkFileExist(String(url)) == true) {
                // console.log("PUSH!")
                occurrence.push(data[j]);
                break;
            }
        }
    }
    // console.log(occurrence)
    return occurrence;
}

function WorldToTilePos(lon, lat, zoom) {
    var x;
    var y;
    x = Math.round((lon + 180.0) / 360.0 * (1 << zoom));
    y = Math.round((1.0 - Math.log(Math.tan(lat * Math.PI / 180.0) +
        1.0 / Math.cos(lat * Math.PI / 180.0)) / Math.PI) / 2.0 * (1 << zoom));
    return { X: x, Y: y };
}