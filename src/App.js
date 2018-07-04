import React, { Component } from 'react';
import './App.css';
import OurRulesList from './OurRulesList'
import CustomRule from './CustomRule'

class App extends Component {

  constructor(){
    super()
    
    this.state={RulesArray: []}
    
    }

  render() {
    return (
      <div className="App">
    <center><h1>The Game of Mao</h1>
    <CustomRule RulesArray={this.state.RulesArray}/>
    <OurRulesList RulesArray={this.state.RulesArray} fillOld={this.fillOldRuleArray} removeRule={this.removeRule}/>
    </center>
      </div>
      
    );
  }

  fillOldRuleArray=()=>{

    const OurRules=[]
        OurRules.push(this.newRule('Open/Closed Parenthesis','Whenever a nonnumber card is played, it becomes illegal to play any number cards until another one is played." whenever they play a `3`.'))
        OurRules.push(this.newRule('Mario','Player must exclaim "MARIO!" whenever they play a `3`.'))
        OurRules.push(this.newRule('Luigi','Player must exclaim "Luigi!" whenever they play a `4`.'))
        OurRules.push(this.newRule('Bowser','Player must yell "Buah-Hah-hah!" whenever they play a `2` after a `4` or `3` was just played.'))
        OurRules.push(this.newRule('wow','Player must say "wow" whenever the exact same card.'))
        OurRules.push(this.newRule('Hello','Player must say "hello" whenever a card of the next highest rank is played.'))
        OurRules.push(this.newRule('Tap of the Ace','Player must tap their head whenever they play an Ace.'))
        OurRules.push(this.newRule('"Sorry, Bud"','If three players in a row can\'t play a card and must draw a card from the draw pile, the second player must tell the third player "Sorry Bud" and then the counter resets.'))
        OurRules.push(this.newRule('knock, knock','If a player plays on top of a card of the same rank they must \'knock\'  the table.'))
        OurRules.push(this.newRule('Thanking Satan','If a player plays the third `6` in a row they must proclaim "Thank You Satan". The number of `6` for the purposes of this rule resets after it triggers. '))
        OurRules.push(this.newRule('Waluigi','Player must exclaim "WaLuigi!" whenever they play a `5`.'))
        OurRules.push(this.newRule('i++','Player must say \'i++\' when a card of the next highest rank is played'))
        OurRules.push(this.newRule('Reverse Reverse','If a player plays a `4` on top of a `4` the "original rule" happens twice and is effectively nullified.'))
        OurRules.push(this.newRule('Meow','A player must \'meow\' whenever the second `6` is played.'))
        OurRules.push(this.newRule('Woof','A player must \'woof\' whenever a `3` is played.'))
        OurRules.push(this.newRule('Yee Haw',' Whenever a player plays a card that change the color (♠/♣ => ♥/♦ or ♥/♦ => ♠/♣) they must say "Yee Haw"'))
        OurRules.push(this.newRule('Giddy Up','Whenever a player plays a `K` , `Q` , or `J` on another one of those three they must say "Giddy Up"'))
        OurRules.push(this.newRule('Slap Jack',' Whenever a player plays a `J` they must slap the pile of played cards.'))
        OurRules.push(this.newRule('Naughty, Naughty','At any time a player may play any `9` on top of a `6` if they say "Naughty Naughty"'))
        OurRules.push(this.newRule('Raise \'Em','If a player plays a `5` then each player must raise their hand, the last player to raise their hand as determined by the `5` playing player must draw a card'))
        OurRules.push(this.newRule('Thank you','Anytime a player recieves a penalty they must say "thank you"'))
        OurRules.push(this.newRule('Sandwiches!','If a player creates a sandwhich on the stack they must slap the table.'))
        OurRules.push(this.newRule('Scream','If a player plays a `9` or a `10` they must scream'))

this.setState({RulesArray: OurRules})

}

newRule(title,rulesText){

  const rule= {
      title: title,
      rule: rulesText,
  }
  
  return rule
}

removeRule= (ruleObj) => {
  let cutArray=[...this.state.RulesArray]
  const cutNumber = this.state.RulesArray.lastIndexOf(ruleObj)
  cutArray.splice(cutNumber,1)
  localStorage.setItem('stringyArray', JSON.stringify(cutArray));

  this.setState({RulesArray: cutArray})
}


}




export default App;
