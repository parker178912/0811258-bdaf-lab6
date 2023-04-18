async function main() {
    const GetNFTbyFlashloan = await ethers.getContractFactory("getwealthNFT");
    const getNFTbyFlashloanContract = await GetNFTbyFlashloan.deploy('0x7A81e50E0Ad45B31cC8E54A55095714F13a0c74e', '0xbe02727047fADd7fe434E093e001745B42C5F49B', '0x5e94B61BCa112683D18d5Ed27CebB16566E6d5ba');
    console.log("getwealthNFT contract deployed to:", getNFTbyFlashloanContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });