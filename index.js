alert('Light-Years Conversion')
var lightyear = prompt('Enter the amount of light years')
var PC = 0.306595
var AU = 63239.74
var KM = 9.5 * Math.pow(10, 12)
var option = prompt('"PC" - Parsec\n"AU" - Astronomical Unit\n"KM" - Kilometers')   

switch(option){
    case 'PC':
    var pc = lightyear * 0.306595 
    alert('light years in parsec is approximately ' + pc + ' parsecs')
    break
    case 'AU':
    var au = lightyear * 63239.74
    alert('light-years in astronomical unit is approximately ' + au + ' astronomical units')
    break
    case 'KM':
    var km = lightyear * 9.5 * Math.pow(10, 12)
    alert('light years in kilometers is approximately ' + km + ' kilometers')
    break
    default:
        alert('Distance in light years:' + lightyear + '\nUnidentified Unit:Out-of-scope conversion')

}
/* caracteres
\ || */