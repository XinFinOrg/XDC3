# XDC3

Fork of XDC3.
It contains additonal formatters, utils to parse `xdc` prefixed.

The address returned in contract logs, data from contract etc. still has `0x`address as prefix instead of `xdc`.  
So for dapps displaying address its preferred to use `toXdcAddress` function of [utils](packages/web3-utils/src/index.js) for displaying addresses in UI.   
  
## TEST

```
mocha test/xdc --exit
```
