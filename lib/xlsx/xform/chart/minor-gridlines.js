module.exports = {
  tag: 'c:minorGridlines',
  c: [
    {
      tag: 'c:spPr',
      c: [
        {
          tag: 'a:ln',
          $: {w: '9525', cap: 'flat', cmpd: 'sng', algn: 'ctr'},
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
                      $: {val: '5000'},
                    },
                    {
                      tag: 'a:lumOff',
                      $: {val: '95000'},
                    },
                  ],
                },
              ],
            },
            {
              tag: 'a:prstDash',
              $: {val: 'dash'},
            },
            {
              tag: 'a:round',
            },
          ],
        },
        {
          tag: 'a:effectLst',
        },
      ],
    },
  ],
};
