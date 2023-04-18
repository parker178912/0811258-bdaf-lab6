const { expect } = require("chai");

describe("getNFTbyFlashloan", function () {
  let nft;
  let bankToken;
  let bank;
  let getNFTbyFlashloan;

  beforeEach(async function () {
    const INFT = await ethers.getContractFactory("WealtPrivateClubNFT");
    nft = await INFT.attach("0x5e94B61BCa112683D18d5Ed27CebB16566E6d5ba");

    const IBankToken = await ethers.getContractFactory("BankToken");
    bankToken = await IBankToken.attach("0x7A81e50E0Ad45B31cC8E54A55095714F13a0c74e");

    const IBank = await ethers.getContractFactory("getNFTbyFlashloan");
    bank = await IBank.attach("0xbe02727047fADd7fe434E093e001745B42C5F49B");

    const GetNFTbyFlashloan = await ethers.getContractFactory("getNFTbyFlashloan");
    getNFTbyFlashloan = await GetNFTbyFlashloan.deploy(nft.address, bank.address, bankToken.address);
  });

  it("should allow the owner to transfer the NFT after receiving a flash loan", async function () {
    await getNFTbyFlashloanContract.flashloanAndGetNFT();
    await getNFTbyFlashloanContract.transferNFT(1);
  });
});
