/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4, friends: 10, normal_life: 20, profession: 30, carrier: 40, top_peformance: 60}
    ) {
      if(knowsProgramming){
      if (focus == 'family'){
      return Math.ceil(800 / config.family);
      }
      if(focus == 'friends'){
        return Math.ceil(800 / config.friends);
      }
      if(focus == 'normal_life'){
        return Math.ceil(800 / config.normal_life);
      }
      if(focus == 'profession'){
        return Math.ceil(800 / config.profession);
      }
      if(focus == 'carrier'){
        return Math.ceil(800 / config.carrier);
      }
      if(focus == 'top_peformance'){
        return Math.ceil(800 / config.top_peformance);
      } 
    }
    else if (!knowsProgramming){
      if (focus == 'family'){
      return Math.ceil(1300 / config.family);
      }
      if(focus == 'friends'){
        return Math.ceil(1300 / config.friends);
      }
      if(focus == 'normal_life'){
        return Math.ceil(1300 / config.normal_life);
      }
      if(focus == 'profession'){
        return Math.ceil(1300 / config.profession);
      }
      if(focus == 'carrier'){
        return Math.ceil(1300 / config.carrier);
      }
      if(focus == 'top_peformance'){
        return Math.ceil(1300 / config.top_peformance);
      } 
    }

  };
  