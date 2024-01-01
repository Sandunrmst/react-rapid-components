
const dummyAPIResponse = {
    showLightAndDarkMode : false,
    showTicTacToeBoard : true,
    showRandomColorGenerator : true,
    showAccordian : false,
    showTreeView : true
}

function featureFlagsDataServiceCall(){

    return new Promise((resolve, reject)=> {
        if(dummyAPIResponse) setTimeout(resolve(dummyAPIResponse), 500);
        else reject('Some error occured!')
    })

}export default featureFlagsDataServiceCall