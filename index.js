const TtmBASE = require( "./xApiHmac.js" );

const yourApiKey = "";
const yourApiSecret = "";

const xApi = new TtmBASE.Api( yourApiKey, yourApiSecret );


runTest();


async function runTest()
{


	let balances  = await xApi.balances();

	console.log(balances);




}