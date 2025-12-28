---
title: NFTs by Address
description: Sample response from Alchemy's getNFTsForOwner-v3 endpoint
path: /data/nfts-by-address.json
data: nfts-by-address.json
draft: false
---

# NFTs by Address

## getNFTsForOwner-v3

Owner: `greeffer.eth`
Network: `ETH_MAINNET`
Contract Address: `0x6dF751449fBd51972772D64Fa3B3EA81E73AB071`.
Metadata: 'false'

#### [Alchemy Dashboard URL](https://dashboard.alchemy.com/sandbox/?network=ETH_MAINNET&method=getNFTsForOwner-v3&query.owner=greeffer.eth&query.contractAddresses%5B0%5D=0x6dF751449fBd51972772D64Fa3B3EA81E73AB071&query.withMetadata=false&query.orderBy=transferTime&query.excludeFilters[]&query.includeFilters[]&query.spamConfidenceLevel=&query.tokenUriTimeoutInMs=0&query.pageKey=&query.pageSize=100)

#### Request

```bash
curl --request GET \
     --url 'https://eth-mainnet.g.alchemy.com/nft/v3/{apiKey}/getNFTsForOwner?owner=greeffer.eth&contractAddresses%5B%5D=0x6dF751449fBd51972772D64Fa3B3EA81E73AB071&withMetadata=false&pageSize=100' \
     --header 'accept: application/json'
```

### Response

```json
{
  "ownedNfts": [
    {
      "contractAddress": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
      "tokenId": "1",
      "balance": "1",
      "isSpam": false,
      "spamClassifications": []
    },
    {
      "contractAddress": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
      "tokenId": "2",
      "balance": "1",
      "isSpam": false,
      "spamClassifications": []
    },
    {
      "contractAddress": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
      "tokenId": "3",
      "balance": "1",
      "isSpam": false,
      "spamClassifications": []
    },
    {
      "contractAddress": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
      "tokenId": "4",
      "balance": "1",
      "isSpam": false,
      "spamClassifications": []
    },
    {
      "contractAddress": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
      "tokenId": "5",
      "balance": "1",
      "isSpam": false,
      "spamClassifications": []
    },
    {
      "contractAddress": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
      "tokenId": "6",
      "balance": "1",
      "isSpam": false,
      "spamClassifications": []
    },
    {
      "contractAddress": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
      "tokenId": "7",
      "balance": "1",
      "isSpam": false,
      "spamClassifications": []
    },
    {
      "contractAddress": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
      "tokenId": "8",
      "balance": "1",
      "isSpam": false,
      "spamClassifications": []
    },
    {
      "contractAddress": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
      "tokenId": "9",
      "balance": "1",
      "isSpam": false,
      "spamClassifications": []
    },
    {
      "contractAddress": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
      "tokenId": "10",
      "balance": "1",
      "isSpam": false,
      "spamClassifications": []
    }
  ],
  "totalCount": 10,
  "validAt": {
    "blockNumber": 24104520,
    "blockHash": "0x605b38169aaca5ed0a1180d01e56bf318657b8b1cf9e29a3f9faf78003ee5d61",
    "blockTimestamp": "2025-12-27T14:19:23Z"
  },
  "pageKey": null
}
```
### Response with Metadata

```json
{
  "ownedNfts": [
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "1",
      "tokenType": "ERC1155",
      "name": "Genie",
      "description": "Photograph, September 2024\n\nThis is the first NFT minted in the Friday Night Lights Collection.",
      "tokenUri": "https://ipfs.io/ipfs/bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/0000000000000000000000000000000000000000000000000000000000000001",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/8c0e96df2f04e8ca71ab12eebb3fa8ce",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/8c0e96df2f04e8ca71ab12eebb3fa8ce",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/8c0e96df2f04e8ca71ab12eebb3fa8ce",
        "contentType": "image/jpeg",
        "size": 1198234,
        "originalUrl": "https://ipfs.io/ipfs/bafybeihphgqsaqejlwi2gombfspwcw7ild2djayrggdmvq74moqb6ighlm/1"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/{id}",
        "metadata": {
          "name": "Genie",
          "description": "Photograph, September 2024\n\nThis is the first NFT minted in the Friday Night Lights Collection.",
          "image": "ipfs://bafybeihphgqsaqejlwi2gombfspwcw7ild2djayrggdmvq74moqb6ighlm/1",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2025-03-20T05:32:40.623Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "2",
      "tokenType": "ERC1155",
      "name": "Angel of Light",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://ipfs.io/ipfs/bafybeibym532caqgqwj4hsqhyhwbwqpfi2h3vnihi6mb7m6ku3lw4aww5q/0000000000000000000000000000000000000000000000000000000000000002",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/744d14e3457166db9515f013aa762641",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/744d14e3457166db9515f013aa762641",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/744d14e3457166db9515f013aa762641",
        "contentType": "image/jpeg",
        "size": 2983425,
        "originalUrl": "https://ipfs.io/ipfs/bafybeialetja4yrtpaxshmiqfhs2owwtk2p2nymngolf4laglnxln3ivf4/2"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeibym532caqgqwj4hsqhyhwbwqpfi2h3vnihi6mb7m6ku3lw4aww5q/{id}",
        "metadata": {
          "name": "Angel of Light",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeialetja4yrtpaxshmiqfhs2owwtk2p2nymngolf4laglnxln3ivf4/2",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2024-09-09T01:42:16.884Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "3",
      "tokenType": "ERC1155",
      "name": "Exstatic",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://alchemy.mypinata.cloud/ipfs/bafybeibym532caqgqwj4hsqhyhwbwqpfi2h3vnihi6mb7m6ku3lw4aww5q/0000000000000000000000000000000000000000000000000000000000000003",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/ecabeb44f03154a48b4edaeea89638ea",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/ecabeb44f03154a48b4edaeea89638ea",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/ecabeb44f03154a48b4edaeea89638ea",
        "contentType": "image/jpeg",
        "size": 4851185,
        "originalUrl": "https://ipfs.io/ipfs/bafybeibrekjqjckmuifsi7bkxzsqwwc3oydrh7i2jksg32o56jdhybwua4/3"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeibym532caqgqwj4hsqhyhwbwqpfi2h3vnihi6mb7m6ku3lw4aww5q/{id}",
        "metadata": {
          "name": "Exstatic",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeibrekjqjckmuifsi7bkxzsqwwc3oydrh7i2jksg32o56jdhybwua4/3",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2024-09-09T06:42:52.390Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "4",
      "tokenType": "ERC1155",
      "name": "The Grip",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://alchemy.mypinata.cloud/ipfs/bafybeibym532caqgqwj4hsqhyhwbwqpfi2h3vnihi6mb7m6ku3lw4aww5q/0000000000000000000000000000000000000000000000000000000000000004",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/1ba9287809d2e0e14233aacf42cfc244",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/1ba9287809d2e0e14233aacf42cfc244",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/1ba9287809d2e0e14233aacf42cfc244",
        "contentType": "image/jpeg",
        "size": 3207672,
        "originalUrl": "https://ipfs.io/ipfs/bafybeicykdxpzv5ibvm5d7ia4jhc65w6la4lsyuzy2sitkpq7xcg34abj4/4"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeibym532caqgqwj4hsqhyhwbwqpfi2h3vnihi6mb7m6ku3lw4aww5q/{id}",
        "metadata": {
          "name": "The Grip",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeicykdxpzv5ibvm5d7ia4jhc65w6la4lsyuzy2sitkpq7xcg34abj4/4",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2024-09-09T06:21:41.364Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "5",
      "tokenType": "ERC1155",
      "name": "CypherPunk",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://alchemy.mypinata.cloud/ipfs/bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/0000000000000000000000000000000000000000000000000000000000000005",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/858b41b9bf5950c0d504cfdf098abfab",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/858b41b9bf5950c0d504cfdf098abfab",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/858b41b9bf5950c0d504cfdf098abfab",
        "contentType": "image/jpeg",
        "size": 4739377,
        "originalUrl": "https://ipfs.io/ipfs/bafybeibpuepgbx3osgn3cfciqw6qxm4rasudxlwbbja7vlmajdmnocchye/5"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/{id}",
        "metadata": {
          "name": "CypherPunk",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeibpuepgbx3osgn3cfciqw6qxm4rasudxlwbbja7vlmajdmnocchye/5",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2024-09-10T01:07:39.851Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "6",
      "tokenType": "ERC1155",
      "name": "Brilliantly Skeletal ",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://ipfs.io/ipfs/bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/0000000000000000000000000000000000000000000000000000000000000006",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/9755d52e397e6f3f896da2817183dc56",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/9755d52e397e6f3f896da2817183dc56",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/9755d52e397e6f3f896da2817183dc56",
        "contentType": "image/jpeg",
        "size": 4430527,
        "originalUrl": "https://ipfs.io/ipfs/bafybeig7w3gadx666x7o4psbuzydpbozfe4jzz77jewx4pkqjj4gv7ygre/6"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/{id}",
        "metadata": {
          "name": "Brilliantly Skeletal ",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeig7w3gadx666x7o4psbuzydpbozfe4jzz77jewx4pkqjj4gv7ygre/6",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2025-03-19T06:06:40.535Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "7",
      "tokenType": "ERC1155",
      "name": "Tangles",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://ipfs.io/ipfs/bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/0000000000000000000000000000000000000000000000000000000000000007",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/d92b3cb2565263d1ddb17ea24d4d5be9",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/d92b3cb2565263d1ddb17ea24d4d5be9",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/d92b3cb2565263d1ddb17ea24d4d5be9",
        "contentType": "image/jpeg",
        "size": 2304312,
        "originalUrl": "https://ipfs.io/ipfs/bafybeidx7lh4q3lljjwsmwt3fkmz7l2uoadbvvqodygfomumpua2enbbii/7"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/{id}",
        "metadata": {
          "name": "Tangles",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeidx7lh4q3lljjwsmwt3fkmz7l2uoadbvvqodygfomumpua2enbbii/7",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": "0xc2587aea341982f0585f13864f47180a3a92bda4",
        "blockNumber": 20715829,
        "timestamp": "2024-09-09T21:46:11Z",
        "transactionHash": "0x3f299cf3cd2a049c1de7cd550c0c241b71ee883b20ef8d49aeb168c0dad0cbdd"
      },
      "owners": null,
      "timeLastUpdated": "2025-01-10T08:04:39.920Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "8",
      "tokenType": "ERC1155",
      "name": "Nightcrawler",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://ipfs.io/ipfs/bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/0000000000000000000000000000000000000000000000000000000000000008",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/ff76dcd299c3a91ccd15e64f5a412bd5",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/ff76dcd299c3a91ccd15e64f5a412bd5",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/ff76dcd299c3a91ccd15e64f5a412bd5",
        "contentType": "image/jpeg",
        "size": 1389630,
        "originalUrl": "https://ipfs.io/ipfs/bafybeifuuiyoy4vdwtrn5qechg7lzifg3jiwjwj447d6zqhehabygn6asa/8"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/{id}",
        "metadata": {
          "name": "Nightcrawler",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeifuuiyoy4vdwtrn5qechg7lzifg3jiwjwj447d6zqhehabygn6asa/8",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2025-01-10T08:04:40.140Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "9",
      "tokenType": "ERC1155",
      "name": "Fibonacci",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://ipfs.io/ipfs/bafybeif3wloohw4qngwtssioxkreqqf7oumea5cq6g2337rockujr4jrme/0000000000000000000000000000000000000000000000000000000000000009",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/c061385a6014b8ca82be39e8f1c67fd2",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/c061385a6014b8ca82be39e8f1c67fd2",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/c061385a6014b8ca82be39e8f1c67fd2",
        "contentType": "image/jpeg",
        "size": 1668063,
        "originalUrl": "https://ipfs.io/ipfs/bafybeib5nh5n52qcmjfodmssqpfw4vaoqmhtui6z5yr6r7ekvt2cepnev4/9"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeif3wloohw4qngwtssioxkreqqf7oumea5cq6g2337rockujr4jrme/{id}",
        "metadata": {
          "name": "Fibonacci",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeib5nh5n52qcmjfodmssqpfw4vaoqmhtui6z5yr6r7ekvt2cepnev4/9",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": "0xc2587aea341982f0585f13864f47180a3a92bda4",
        "blockNumber": 20715880,
        "timestamp": "2024-09-09T21:56:23Z",
        "transactionHash": "0x6f2baecf34d8905e4c8c34237a1f125bcaedc4cefef115b434d1802d483213d7"
      },
      "owners": null,
      "timeLastUpdated": "2024-09-09T22:11:55.841Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "10",
      "tokenType": "ERC1155",
      "name": "Alien",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://alchemy.mypinata.cloud/ipfs/bafybeif3wloohw4qngwtssioxkreqqf7oumea5cq6g2337rockujr4jrme/000000000000000000000000000000000000000000000000000000000000000a",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/4fe5fe7b0c04f61937c95808527d1423",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/4fe5fe7b0c04f61937c95808527d1423",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/4fe5fe7b0c04f61937c95808527d1423",
        "contentType": "image/jpeg",
        "size": 1450028,
        "originalUrl": "https://ipfs.io/ipfs/bafybeihutd47vdsb6zy4a6qsbma7mwqkbte75hquyv7wimwzowpohgogtq/10"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeif3wloohw4qngwtssioxkreqqf7oumea5cq6g2337rockujr4jrme/{id}",
        "metadata": {
          "name": "Alien",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeihutd47vdsb6zy4a6qsbma7mwqkbte75hquyv7wimwzowpohgogtq/10",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": "0xc2587aea341982f0585f13864f47180a3a92bda4",
        "blockNumber": 20715896,
        "timestamp": "2024-09-09T21:59:35Z",
        "transactionHash": "0x4d1c1edc7ea5c05cfce3e96079d4d9513e0c4c20b233ab0994c4a00dba9e15dc"
      },
      "owners": null,
      "timeLastUpdated": "2024-09-09T22:11:56.023Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0xD4416b13d2b3a9aBae7AcD5D6C2BbDBE25686401",
        "name": "NameWrapper",
        "symbol": null,
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0x0904Dac3347eA47d208F3Fd67402D039a3b99859",
        "deployedBlockNumber": 16925608,
        "openSeaMetadata": {
          "floorPrice": 1.18E-5,
          "collectionName": "ENS: Ethereum Name Service",
          "collectionSlug": "ens",
          "safelistRequestStatus": "verified",
          "imageUrl": "https://i2c.seadn.io/collection/ens/image/2389b989ec47442bc2c714bcdf3e19/b02389b989ec47442bc2c714bcdf3e19.png",
          "description": "Ethereum Name Service (ENS) domains are secure domain names for the decentralized world. ENS domains provide a way for users to map human readable names to blockchain and non-blockchain resources, like Ethereum addresses, IPFS hashes, or website URLs. ENS domains can be bought and sold on secondary markets.",
          "externalUrl": null,
          "twitterUsername": "ensdomains",
          "discordUrl": null,
          "bannerImageUrl": "https://i2c.seadn.io/collection/ens/desktopHeroMedia/dd03416d9fdbfa8469940079031f9e/dcdd03416d9fdbfa8469940079031f9e.png?fit=inside",
          "lastIngestedAt": "2025-12-27T09:03:13.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "22548449518108023895959554474033411906050331960963257424734050312058441249570",
      "tokenType": "ERC1155",
      "name": "greeffer.eth",
      "description": "greeffer.eth, an ENS name.",
      "tokenUri": "https://metadata.ens.domains/mainnet/0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401/0x31d9f85c690a251d7fcbd62e70d19d13a9edd6913430c849bb4c4788f6073322",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/cb590c3e8be39d808fa8ad22f7da374f",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/cb590c3e8be39d808fa8ad22f7da374f",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/cb590c3e8be39d808fa8ad22f7da374f",
        "contentType": "image/svg+xml",
        "size": 101093,
        "originalUrl": "https://raw2.seadn.io/ethereum/0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401/d92f5e2d7d0e4f93c1f65db269a08d/05d92f5e2d7d0e4f93c1f65db269a08d.svg"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "https://metadata.ens.domains/mainnet/0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401/0x31d9f85c690a251d7fcbd62e70d19d13a9edd6913430c849bb4c4788f6073322",
        "metadata": {
          "name": "greeffer.eth",
          "description": "greeffer.eth, an ENS name.",
          "image": "https://raw2.seadn.io/ethereum/0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401/d92f5e2d7d0e4f93c1f65db269a08d/05d92f5e2d7d0e4f93c1f65db269a08d.svg",
          "attributes": [
            {
              "value": "8",
              "trait_type": "Length"
            },
            {
              "value": "1719516611",
              "trait_type": "Created Date"
            },
            {
              "value": "letter",
              "trait_type": "Character Set"
            },
            {
              "value": "8",
              "trait_type": "Segment Length"
            },
            {
              "value": "Emancipated",
              "trait_type": "Namewrapper State"
            },
            {
              "value": "1758849563",
              "trait_type": "Namewrapper Expiry Date"
            }
          ]
        },
        "error": null
      },
      "collection": {
        "name": "ENS: Ethereum Name Service",
        "slug": "ens",
        "externalUrl": null,
        "bannerImageUrl": "https://i2c.seadn.io/collection/ens/desktopHeroMedia/dd03416d9fdbfa8469940079031f9e/dcdd03416d9fdbfa8469940079031f9e.png?fit=inside"
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2025-12-27T13:41:57.340Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    }
  ],
  "totalCount": 11,
  "validAt": {
    "blockNumber": 24104499,
    "blockHash": "0xa3bce1ee1645c25daee27db90f8f19aa2ebc148305cebf780bf7d181bbead6d5",
    "blockTimestamp": "2025-12-27T14:15:11Z"
  },
  "pageKey": null
}
{
  "ownedNfts": [
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "1",
      "tokenType": "ERC1155",
      "name": "Genie",
      "description": "Photograph, September 2024\n\nThis is the first NFT minted in the Friday Night Lights Collection.",
      "tokenUri": "https://ipfs.io/ipfs/bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/0000000000000000000000000000000000000000000000000000000000000001",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/8c0e96df2f04e8ca71ab12eebb3fa8ce",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/8c0e96df2f04e8ca71ab12eebb3fa8ce",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/8c0e96df2f04e8ca71ab12eebb3fa8ce",
        "contentType": "image/jpeg",
        "size": 1198234,
        "originalUrl": "https://ipfs.io/ipfs/bafybeihphgqsaqejlwi2gombfspwcw7ild2djayrggdmvq74moqb6ighlm/1"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/{id}",
        "metadata": {
          "name": "Genie",
          "description": "Photograph, September 2024\n\nThis is the first NFT minted in the Friday Night Lights Collection.",
          "image": "ipfs://bafybeihphgqsaqejlwi2gombfspwcw7ild2djayrggdmvq74moqb6ighlm/1",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2025-03-20T05:32:40.623Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "2",
      "tokenType": "ERC1155",
      "name": "Angel of Light",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://ipfs.io/ipfs/bafybeibym532caqgqwj4hsqhyhwbwqpfi2h3vnihi6mb7m6ku3lw4aww5q/0000000000000000000000000000000000000000000000000000000000000002",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/744d14e3457166db9515f013aa762641",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/744d14e3457166db9515f013aa762641",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/744d14e3457166db9515f013aa762641",
        "contentType": "image/jpeg",
        "size": 2983425,
        "originalUrl": "https://ipfs.io/ipfs/bafybeialetja4yrtpaxshmiqfhs2owwtk2p2nymngolf4laglnxln3ivf4/2"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeibym532caqgqwj4hsqhyhwbwqpfi2h3vnihi6mb7m6ku3lw4aww5q/{id}",
        "metadata": {
          "name": "Angel of Light",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeialetja4yrtpaxshmiqfhs2owwtk2p2nymngolf4laglnxln3ivf4/2",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2024-09-09T01:42:16.884Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "3",
      "tokenType": "ERC1155",
      "name": "Exstatic",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://alchemy.mypinata.cloud/ipfs/bafybeibym532caqgqwj4hsqhyhwbwqpfi2h3vnihi6mb7m6ku3lw4aww5q/0000000000000000000000000000000000000000000000000000000000000003",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/ecabeb44f03154a48b4edaeea89638ea",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/ecabeb44f03154a48b4edaeea89638ea",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/ecabeb44f03154a48b4edaeea89638ea",
        "contentType": "image/jpeg",
        "size": 4851185,
        "originalUrl": "https://ipfs.io/ipfs/bafybeibrekjqjckmuifsi7bkxzsqwwc3oydrh7i2jksg32o56jdhybwua4/3"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeibym532caqgqwj4hsqhyhwbwqpfi2h3vnihi6mb7m6ku3lw4aww5q/{id}",
        "metadata": {
          "name": "Exstatic",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeibrekjqjckmuifsi7bkxzsqwwc3oydrh7i2jksg32o56jdhybwua4/3",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2024-09-09T06:42:52.390Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "4",
      "tokenType": "ERC1155",
      "name": "The Grip",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://alchemy.mypinata.cloud/ipfs/bafybeibym532caqgqwj4hsqhyhwbwqpfi2h3vnihi6mb7m6ku3lw4aww5q/0000000000000000000000000000000000000000000000000000000000000004",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/1ba9287809d2e0e14233aacf42cfc244",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/1ba9287809d2e0e14233aacf42cfc244",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/1ba9287809d2e0e14233aacf42cfc244",
        "contentType": "image/jpeg",
        "size": 3207672,
        "originalUrl": "https://ipfs.io/ipfs/bafybeicykdxpzv5ibvm5d7ia4jhc65w6la4lsyuzy2sitkpq7xcg34abj4/4"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeibym532caqgqwj4hsqhyhwbwqpfi2h3vnihi6mb7m6ku3lw4aww5q/{id}",
        "metadata": {
          "name": "The Grip",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeicykdxpzv5ibvm5d7ia4jhc65w6la4lsyuzy2sitkpq7xcg34abj4/4",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2024-09-09T06:21:41.364Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "5",
      "tokenType": "ERC1155",
      "name": "CypherPunk",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://alchemy.mypinata.cloud/ipfs/bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/0000000000000000000000000000000000000000000000000000000000000005",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/858b41b9bf5950c0d504cfdf098abfab",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/858b41b9bf5950c0d504cfdf098abfab",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/858b41b9bf5950c0d504cfdf098abfab",
        "contentType": "image/jpeg",
        "size": 4739377,
        "originalUrl": "https://ipfs.io/ipfs/bafybeibpuepgbx3osgn3cfciqw6qxm4rasudxlwbbja7vlmajdmnocchye/5"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/{id}",
        "metadata": {
          "name": "CypherPunk",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeibpuepgbx3osgn3cfciqw6qxm4rasudxlwbbja7vlmajdmnocchye/5",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2024-09-10T01:07:39.851Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "6",
      "tokenType": "ERC1155",
      "name": "Brilliantly Skeletal ",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://ipfs.io/ipfs/bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/0000000000000000000000000000000000000000000000000000000000000006",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/9755d52e397e6f3f896da2817183dc56",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/9755d52e397e6f3f896da2817183dc56",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/9755d52e397e6f3f896da2817183dc56",
        "contentType": "image/jpeg",
        "size": 4430527,
        "originalUrl": "https://ipfs.io/ipfs/bafybeig7w3gadx666x7o4psbuzydpbozfe4jzz77jewx4pkqjj4gv7ygre/6"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/{id}",
        "metadata": {
          "name": "Brilliantly Skeletal ",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeig7w3gadx666x7o4psbuzydpbozfe4jzz77jewx4pkqjj4gv7ygre/6",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2025-03-19T06:06:40.535Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "7",
      "tokenType": "ERC1155",
      "name": "Tangles",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://ipfs.io/ipfs/bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/0000000000000000000000000000000000000000000000000000000000000007",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/d92b3cb2565263d1ddb17ea24d4d5be9",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/d92b3cb2565263d1ddb17ea24d4d5be9",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/d92b3cb2565263d1ddb17ea24d4d5be9",
        "contentType": "image/jpeg",
        "size": 2304312,
        "originalUrl": "https://ipfs.io/ipfs/bafybeidx7lh4q3lljjwsmwt3fkmz7l2uoadbvvqodygfomumpua2enbbii/7"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/{id}",
        "metadata": {
          "name": "Tangles",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeidx7lh4q3lljjwsmwt3fkmz7l2uoadbvvqodygfomumpua2enbbii/7",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": "0xc2587aea341982f0585f13864f47180a3a92bda4",
        "blockNumber": 20715829,
        "timestamp": "2024-09-09T21:46:11Z",
        "transactionHash": "0x3f299cf3cd2a049c1de7cd550c0c241b71ee883b20ef8d49aeb168c0dad0cbdd"
      },
      "owners": null,
      "timeLastUpdated": "2025-01-10T08:04:39.920Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "8",
      "tokenType": "ERC1155",
      "name": "Nightcrawler",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://ipfs.io/ipfs/bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/0000000000000000000000000000000000000000000000000000000000000008",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/ff76dcd299c3a91ccd15e64f5a412bd5",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/ff76dcd299c3a91ccd15e64f5a412bd5",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/ff76dcd299c3a91ccd15e64f5a412bd5",
        "contentType": "image/jpeg",
        "size": 1389630,
        "originalUrl": "https://ipfs.io/ipfs/bafybeifuuiyoy4vdwtrn5qechg7lzifg3jiwjwj447d6zqhehabygn6asa/8"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeid46yzd2bj2mo4yh65caifpxnsorzm4lgvgde764d6nz5yp46f2im/{id}",
        "metadata": {
          "name": "Nightcrawler",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeifuuiyoy4vdwtrn5qechg7lzifg3jiwjwj447d6zqhehabygn6asa/8",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2025-01-10T08:04:40.140Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "9",
      "tokenType": "ERC1155",
      "name": "Fibonacci",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://ipfs.io/ipfs/bafybeif3wloohw4qngwtssioxkreqqf7oumea5cq6g2337rockujr4jrme/0000000000000000000000000000000000000000000000000000000000000009",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/c061385a6014b8ca82be39e8f1c67fd2",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/c061385a6014b8ca82be39e8f1c67fd2",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/c061385a6014b8ca82be39e8f1c67fd2",
        "contentType": "image/jpeg",
        "size": 1668063,
        "originalUrl": "https://ipfs.io/ipfs/bafybeib5nh5n52qcmjfodmssqpfw4vaoqmhtui6z5yr6r7ekvt2cepnev4/9"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeif3wloohw4qngwtssioxkreqqf7oumea5cq6g2337rockujr4jrme/{id}",
        "metadata": {
          "name": "Fibonacci",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeib5nh5n52qcmjfodmssqpfw4vaoqmhtui6z5yr6r7ekvt2cepnev4/9",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": "0xc2587aea341982f0585f13864f47180a3a92bda4",
        "blockNumber": 20715880,
        "timestamp": "2024-09-09T21:56:23Z",
        "transactionHash": "0x6f2baecf34d8905e4c8c34237a1f125bcaedc4cefef115b434d1802d483213d7"
      },
      "owners": null,
      "timeLastUpdated": "2024-09-09T22:11:55.841Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0x6dF751449fBd51972772D64Fa3B3EA81E73AB071",
        "name": "Friday Night Lights",
        "symbol": "FNL",
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0xc2587aeA341982F0585F13864f47180a3A92bdA4",
        "deployedBlockNumber": 20701217,
        "openSeaMetadata": {
          "floorPrice": null,
          "collectionName": "Friday Night Lights",
          "collectionSlug": "friday-night-lights-2",
          "safelistRequestStatus": "not_requested",
          "imageUrl": "https://i2c.seadn.io/ethereum/6aff1210a3c846ada0e0272cb6b6e511/cef71db3a9dbdee523bd4bc48db61b/e8cef71db3a9dbdee523bd4bc48db61b.jpeg",
          "description": null,
          "externalUrl": null,
          "twitterUsername": null,
          "discordUrl": null,
          "bannerImageUrl": null,
          "lastIngestedAt": "2025-12-27T02:10:19.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "10",
      "tokenType": "ERC1155",
      "name": "Alien",
      "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
      "tokenUri": "https://alchemy.mypinata.cloud/ipfs/bafybeif3wloohw4qngwtssioxkreqqf7oumea5cq6g2337rockujr4jrme/000000000000000000000000000000000000000000000000000000000000000a",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/4fe5fe7b0c04f61937c95808527d1423",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/4fe5fe7b0c04f61937c95808527d1423",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/4fe5fe7b0c04f61937c95808527d1423",
        "contentType": "image/jpeg",
        "size": 1450028,
        "originalUrl": "https://ipfs.io/ipfs/bafybeihutd47vdsb6zy4a6qsbma7mwqkbte75hquyv7wimwzowpohgogtq/10"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "ipfs://bafybeif3wloohw4qngwtssioxkreqqf7oumea5cq6g2337rockujr4jrme/{id}",
        "metadata": {
          "name": "Alien",
          "description": "Photograph\n2024\n\nA light painting using long exposure. Part of the Friday Night Lights Collection.",
          "image": "ipfs://bafybeihutd47vdsb6zy4a6qsbma7mwqkbte75hquyv7wimwzowpohgogtq/10",
          "external_url": null
        },
        "error": null
      },
      "collection": {
        "name": "Friday Night Lights",
        "slug": "friday-night-lights-2",
        "externalUrl": null,
        "bannerImageUrl": null
      },
      "mint": {
        "mintAddress": "0xc2587aea341982f0585f13864f47180a3a92bda4",
        "blockNumber": 20715896,
        "timestamp": "2024-09-09T21:59:35Z",
        "transactionHash": "0x4d1c1edc7ea5c05cfce3e96079d4d9513e0c4c20b233ab0994c4a00dba9e15dc"
      },
      "owners": null,
      "timeLastUpdated": "2024-09-09T22:11:56.023Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    },
    {
      "contract": {
        "address": "0xD4416b13d2b3a9aBae7AcD5D6C2BbDBE25686401",
        "name": "NameWrapper",
        "symbol": null,
        "totalSupply": null,
        "tokenType": "ERC1155",
        "contractDeployer": "0x0904Dac3347eA47d208F3Fd67402D039a3b99859",
        "deployedBlockNumber": 16925608,
        "openSeaMetadata": {
          "floorPrice": 1.18E-5,
          "collectionName": "ENS: Ethereum Name Service",
          "collectionSlug": "ens",
          "safelistRequestStatus": "verified",
          "imageUrl": "https://i2c.seadn.io/collection/ens/image/2389b989ec47442bc2c714bcdf3e19/b02389b989ec47442bc2c714bcdf3e19.png",
          "description": "Ethereum Name Service (ENS) domains are secure domain names for the decentralized world. ENS domains provide a way for users to map human readable names to blockchain and non-blockchain resources, like Ethereum addresses, IPFS hashes, or website URLs. ENS domains can be bought and sold on secondary markets.",
          "externalUrl": null,
          "twitterUsername": "ensdomains",
          "discordUrl": null,
          "bannerImageUrl": "https://i2c.seadn.io/collection/ens/desktopHeroMedia/dd03416d9fdbfa8469940079031f9e/dcdd03416d9fdbfa8469940079031f9e.png?fit=inside",
          "lastIngestedAt": "2025-12-27T09:03:13.000Z"
        },
        "isSpam": false,
        "spamClassifications": []
      },
      "tokenId": "22548449518108023895959554474033411906050331960963257424734050312058441249570",
      "tokenType": "ERC1155",
      "name": "greeffer.eth",
      "description": "greeffer.eth, an ENS name.",
      "tokenUri": "https://metadata.ens.domains/mainnet/0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401/0x31d9f85c690a251d7fcbd62e70d19d13a9edd6913430c849bb4c4788f6073322",
      "image": {
        "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/cb590c3e8be39d808fa8ad22f7da374f",
        "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/cb590c3e8be39d808fa8ad22f7da374f",
        "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/cb590c3e8be39d808fa8ad22f7da374f",
        "contentType": "image/svg+xml",
        "size": 101093,
        "originalUrl": "https://raw2.seadn.io/ethereum/0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401/d92f5e2d7d0e4f93c1f65db269a08d/05d92f5e2d7d0e4f93c1f65db269a08d.svg"
      },
      "animation": {
        "cachedUrl": null,
        "contentType": null,
        "size": null,
        "originalUrl": null
      },
      "raw": {
        "tokenUri": "https://metadata.ens.domains/mainnet/0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401/0x31d9f85c690a251d7fcbd62e70d19d13a9edd6913430c849bb4c4788f6073322",
        "metadata": {
          "name": "greeffer.eth",
          "description": "greeffer.eth, an ENS name.",
          "image": "https://raw2.seadn.io/ethereum/0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401/d92f5e2d7d0e4f93c1f65db269a08d/05d92f5e2d7d0e4f93c1f65db269a08d.svg",
          "attributes": [
            {
              "value": "8",
              "trait_type": "Length"
            },
            {
              "value": "1719516611",
              "trait_type": "Created Date"
            },
            {
              "value": "letter",
              "trait_type": "Character Set"
            },
            {
              "value": "8",
              "trait_type": "Segment Length"
            },
            {
              "value": "Emancipated",
              "trait_type": "Namewrapper State"
            },
            {
              "value": "1758849563",
              "trait_type": "Namewrapper Expiry Date"
            }
          ]
        },
        "error": null
      },
      "collection": {
        "name": "ENS: Ethereum Name Service",
        "slug": "ens",
        "externalUrl": null,
        "bannerImageUrl": "https://i2c.seadn.io/collection/ens/desktopHeroMedia/dd03416d9fdbfa8469940079031f9e/dcdd03416d9fdbfa8469940079031f9e.png?fit=inside"
      },
      "mint": {
        "mintAddress": null,
        "blockNumber": null,
        "timestamp": null,
        "transactionHash": null
      },
      "owners": null,
      "timeLastUpdated": "2025-12-27T13:41:57.340Z",
      "balance": "1",
      "acquiredAt": {
        "blockTimestamp": null,
        "blockNumber": null
      }
    }
  ],
  "totalCount": 11,
  "validAt": {
    "blockNumber": 24104499,
    "blockHash": "0xa3bce1ee1645c25daee27db90f8f19aa2ebc148305cebf780bf7d181bbead6d5",
    "blockTimestamp": "2025-12-27T14:15:11Z"
  },
  "pageKey": null
}
```

