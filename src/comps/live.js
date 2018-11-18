// Imports
import React, { Component } from 'react';
import './live.css';

import Button from './button.js';
import SecondaryButton from './secondaryButton.js';
import UserRankingPseudo from './userRankingPseudo.js';
import UserRanking from './userRanking.js';

import GreenArrow from '../img/greenarrow.png';
import RedArrow from '../img/redarrow.png';
import Dice from '../img/dice.png';


class Live extends Component {


  render() {
    return (
      <div className='live_holder'>
        <div className='horizontal_divider'></div>
        <div className='toggle_holder'>
          <SecondaryButton SecondaryButtonTitle='Live bets'></SecondaryButton>
          <div className='div'></div>
          <SecondaryButton SecondaryButtonTitle='My bets'></SecondaryButton>
          <div className='div'></div>
          <SecondaryButton SecondaryButtonTitle='Payouts'></SecondaryButton>
          <div className='div'></div>
          <SecondaryButton SecondaryButtonTitle='Wagers'></SecondaryButton>
        </div>
        <div className='ranking_container'>

          <UserRankingPseudo></UserRankingPseudo>

          <UserRanking
            ClassNames='user_ranking lose'
            timeOfBet='01:14:23'
            userName='mwdossantoss'
            rollUnder='57'
            betAmount='3.000'
            diceRoll='24'
            payoutAmount='-'
          ></UserRanking>
          <UserRanking
            ClassNames='user_ranking win'
            timeOfBet='01:14:23'
            userName='starwalkerss'
            rollUnder='2'
            betAmount='30.000'
            diceRoll='12'
            payoutAmount='2.49278'
          ></UserRanking>
          <UserRanking
            ClassNames='user_ranking lose'
            timeOfBet='01:14:23'
            userName='mwdossantoss'
            rollUnder='57'
            betAmount='3.000'
            diceRoll='24'
            payoutAmount='-'
          ></UserRanking>
          <UserRanking
            ClassNames='user_ranking lose'
            timeOfBet='01:14:23'
            userName='mwdossantoss'
            rollUnder='57'
            betAmount='3.000'
            diceRoll='24'
            payoutAmount='-'
          ></UserRanking>
          <UserRanking
            ClassNames='user_ranking win'
            timeOfBet='01:14:23'
            userName='mwdossantoss'
            rollUnder='57'
            betAmount='3.000'
            diceRoll='24'
            payoutAmount='2.478'
          ></UserRanking>
          <UserRanking
            ClassNames='user_ranking lose'
            timeOfBet='01:14:23'
            userName='mwdossantoss'
            rollUnder='57'
            betAmount='3.000'
            diceRoll='24'
            payoutAmount='-'
          ></UserRanking>
          <UserRanking
            ClassNames='user_ranking win'
            timeOfBet='01:14:23'
            userName='mwdossantoss'
            rollUnder='57'
            betAmount='3.000'
            diceRoll='24'
            payoutAmount='2.478'
          ></UserRanking>
          <UserRanking
            ClassNames='user_ranking lose'
            timeOfBet='01:14:23'
            userName='mwdossantoss'
            rollUnder='57'
            betAmount='3.000'
            diceRoll='24'
            payoutAmount='-'
          ></UserRanking>
        </div>
      </div>
    );
  }
}

export default Live;
