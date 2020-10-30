module.exports = {
  tag: 'c:legend',
  c: [
    {
      tag: 'c:legendPos',
      $: {val: 'b'},
    },
    {
      tag: 'c:overlay',
      $: {val: '0'},
    },
    {
      tag: 'c:spPr',
      c: [
        {
          tag: 'a:noFill',
        },
        {
          tag: 'a:ln',
          c: [
            {
              tag: 'a:noFill',
            },
          ],
        },
        {
          tag: 'a:effectLst',
        },
      ],
    },
    {
      tag: 'c:txPr',
      c: [
        {
          tag: 'a:bodyPr',
          $: {rot: '0', spcFirstLastPara: '1', vertOverflow: 'ellipsis', vert: 'horz', wrap: 'square', anchor: 'ctr', anchorCtr: '1'},
        },
        {
          tag: 'a:lstStyle',
        },
        {
          tag: 'a:p',
          c: [
            {
              tag: 'a:pPr',
              c: [
                {
                  tag: 'a:defRPr',
                  $: {sz: '900', b: '0', i: '0', u: 'none', strike: 'noStrike', kern: '1200', baseline: '0'},
                  c: [
                    {
                      tag: 'a:solidFill',
                      c: [
                        {
                          tag: 'a:schemeClr',
                          $: {val: 'tx1'},
                          c: [
                            {
                              tag: 'a:lumMod',
                              $: {val: '65000'},
                            },
                            {
                              tag: 'a:lumOff',
                              $: {val: '35000'},
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: 'a:latin',
                      $: {typeface: '+mn-lt'},
                    },
                    {
                      tag: 'a:ea',
                      $: {typeface: '+mn-ea'},
                    },
                    {
                      tag: 'a:cs',
                      $: {typeface: '+mn-cs'},
                    },
                  ],
                },
              ],
            },
            {
              tag: 'a:endParaRPr',
              $: {lang: 'zh-HK'},
            },
          ],
        },
      ],
    },
  ],
};
