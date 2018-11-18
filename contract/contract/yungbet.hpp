#include <eosiolib/asset.hpp>
#include <eosiolib/crypto.h>
#include <eosiolib/eosio.hpp>

using namespace eosio;
using std::string;

namespace models {

    //@abi table bets i64
    struct bets_type {
        account_name payer;
        asset bet_amount;

        uint64_t primary_key() const { return name; }
    };

    typedef eosio::multi_index<N(bets), bets_type> bets_table;

    //@abi table payouts i64
    struct payouts_type {
        account_name payer;
        asset bet_amount;
        asset payout_amount;

        uint64_t primary_key() const { return name; }
    };

    typedef eosio::multi_index<N(payouts), payouts_type> payouts_table;

}

using namespace models;

class yungbet : public contract {
  public:
    using contract::contract;

    // These have to be EOS.IO Main account name https://eoslynx.com/ is a wallet to make an account, then transfer account to scatter plug in https://get-scatter.com/
    account_name _bas;
    account_name _mwdossantoss;

    void makebet(account_name payer, asset bet_amount);

};

EOSIO_ABI(yungbet, (makebet))
