#include "yungbet.hpp"

void yungbet::makebet(account_name payer, asset bet_amount) {
  eosio_assert(bet_amount != 0, "Need to make a bet over > 0...");

  bets_table bets(_self, _self);
  payouts_table payouts(_self, _self);

  asset reward = bet_amount / 2;

  bets.emplace(payer, [&](bets_type &bet) {
    bet.payer = payer;
    bet.bet_amount = bet_amount;
  });

  payouts.emplace(payer, [&](payouts_type &payout) {
    payout.payer = payer;
    payout.bet_amount = bet_amount;
    payout.payout_amount = reward;
  });

  action(
    permission_level{_self, N(active)}, N(eosio.token), N(transfer),
    std::make_tuple(
      _self, bond.creator, bond.deposit,
      string("Bet placed by ") + string(payer) +
      string(" and rewarded ") + string(reward)
    )
  ).send();
}
