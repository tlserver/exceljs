module.exports = {
  tag: 'c:majorGridlines',
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
                      $: {val: '15000'},
                    },
                    {
                      tag: 'a:lumOff',
                      $: {val: '85000'},
                    },
                  ],
                },
              ],
            },
            {
              tag: 'a:prstDash',
              $: {val: 'lgDash'},
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
