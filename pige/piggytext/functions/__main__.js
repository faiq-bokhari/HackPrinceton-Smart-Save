const lib = require('lib')({token: '09kPfvAEzt7dneXTisL3xoTgwfqSsSoTfAy7e32D1dKpchDZES029DIJV1-WmL_u'});

/**
* A basic Hello World function
* @param {string} rec A number
* @param {integer} pc percentage
* @returns {any}
*/

module.exports = async (rec,pc, context) => {

  // if (pc){
  // 	return lib.messagebird.sms.create({

  //   recipient: rec,
  //   body: "You are " + pc + "% complete !"

  // });
  
  switch(pc) {
    case 25:
        return lib.messagebird.sms.create({

    	recipient: rec,
   		body: "Awesomesauce! You're a 1/4 of the way on your savings goal on Pig-E! Keep at it!"
		})
        break;
    case 50:
        return lib.messagebird.sms.create({

    	recipient: rec,
   		body: "Congrats Fella! You're halfway there on your goal on Pig-E"
		})
        break;
    case 75:
		return lib.messagebird.sms.create({

    	recipient: rec,
   		body: "You are 75% there on you savings goal. Just. A. Bit. More."
		})
        break;
    case 100:
		return lib.messagebird.sms.create({

    	recipient: rec,
   		body: "Congratulations!! You've reached your savings goal on Pig-E!"
		})
    default:
        return 0;
}
  


};
