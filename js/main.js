'use strict';

$(function () {

    new Clipboard('#get-code');

    let cache = localStorage.getItem('organogram');

    if (!cache) {
        cache = `
var config = {
    container: '#organogram',
    node: { HTMLclass: 'member' },
    connectors: {
        type: 'bCurve',
        style: {
            stroke: '#666666'
        }
    }
},

ceo = {
    text: {
        name: \`Mark Hill\`,
        title: \`Chief executive officer\`,
        contact: \`Tel: 01 213 123 134\`,
        desc: \`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a aliquet metus, ut euismod nibh. Maecenas aliquam vehicula lobortis. Aenean sollicitudin tincidunt rutrum. Maecenas vel dolor imperdiet, pretium leo sed, pretium mauris. Nulla facilisi. Integer tristique facilisis aliquet. Fusce aliquet nec dui et posuere. Duis aliquet dictum imperdiet. Duis sit amet tristique nulla. Sed et porta quam, auctor tincidunt enim. Duis elementum posuere egestas. Aliquam aliquam eros sit amet ullamcorper gravida. Sed lobortis dui sed diam pharetra, vitae iaculis ligula laoreet.

Praesent ut metus ipsum. Donec vulputate, nibh eu pellentesque hendrerit, mi felis commodo mauris, a auctor elit eros ac justo. Donec sodales sodales arcu ut ullamcorper. Proin quis est a diam hendrerit dictum. Aliquam scelerisque ligula eros, ac commodo ex ornare ut. Cras porttitor turpis dui, non egestas sapien luctus in. Duis pellentesque nisl ligula, eu venenatis sem aliquet vel. Nunc enim lacus, posuere semper auctor vitae, volutpat ut tortor. Integer quis magna ut orci ullamcorper feugiat vel eu eros. Aliquam eget molestie ante. Quisque condimentum metus sit amet dolor congue, ut mattis dolor mattis. Aliquam lobortis, nunc eu elementum dictum, nulla turpis mollis lorem, at fringilla justo turpis at tellus. Cras turpis nisl, ultricies quis elementum molestie, pharetra a diam.
        \`
    },
    image: \`https://randomuser.me/api/portraits/med/women/83.jpg\`
},
cto = {
    parent: ceo,
    text: {
        name: \`Joe Linux\`,
        title: \`Chief Technology Officer\`,
        desc: \`description\`
    },
    stackChildren: true,
    image: \`https://randomuser.me/api/portraits/med/women/20.jpg\`
},
cbo = {
    parent: ceo,
    stackChildren: true,
    text: {
        name: \`Linda May\`,
        title: \`Chief Business Officer\`,
        desc: \`description\`
    },
    image: \`https://randomuser.me/api/portraits/med/men/21.jpg\`
},
cdo = {
    parent: ceo,
    text: {
        name: \`John Green\`,
        title: \`Chief accounting officer\`,
        contact: \`Tel: 01 213 123 134\`,
        desc: \`description\`
    },
    image: \`https://randomuser.me/api/portraits/med/men/32.jpg\`
},
cio = {
    parent: cto,
    text: {
        name: \`Ron Blomquist\`,
        title: \`Chief Information Security Officer\`,
        desc: \`description\`
    },
    image: \`https://randomuser.me/api/portraits/med/men/12.jpg\`
},
ciso = {
    parent: cto,
    text: {
        name: \`Michael Rubin\`,
        title: \`Chief Innovation Officer\`,
        contact: {
            val: \`we@aregreat.com\`,
            href: \`mailto:we@aregreat.com\`
        },
        desc: \`description\`
    },
    image: \`https://randomuser.me/api/portraits/med/men/67.jpg\`
},
cio2 = {
    parent: cdo,
    text: {
        name: \`Erica Reel\`,
        title: \`Chief Customer Officer\`,
        desc: \`description\`
    },
    link: {
        href: \`http://www.google.com\`
    },
    image: \`https://randomuser.me/api/portraits/med/men/75.jpg\`
},
ciso2 = {
    parent: cbo,
    text: {
        name: \`Alice Lopez\`,
        title: \`Chief Communications Officer\`,
        desc: \`description\`
    },
    image: \`https://randomuser.me/api/portraits/med/men/85.jpg\`
},
ciso3 = {
    parent: cbo,
    text: {
        name: \`Mary Johnson\`,
        title: \`Chief Brand Officer\`,
        desc: \`description\`
    },
    image: \`https://randomuser.me/api/portraits/med/women/92.jpg\`
},
ciso4 = {
    parent: cbo,
    text: {
        name: \`Kirk Douglas\`,
        title: \`Chief Business Development Officer\`,
        desc: \`description\`
    },
    image: \`https://randomuser.me/api/portraits/med/men/66.jpg\`
};

var og = [
    config,
    ceo,
    cto,
    cbo,
    cdo,
    cio,
    ciso,
    cio2,
    ciso2,
    ciso3,
    ciso4
];
        `;

        localStorage.setItem('organogram', cache);
    }

    $('body').append('<script id="treant">' + cache + ' var tree = new Treant(og); </script>');

    $('#editcode').text(cache);

    $('#reset').click(() => {

        localStorage.removeItem('organogram');
        location.reload();
    });

    $('#edit-save').click(() => {

        localStorage.setItem('organogram', $('#editcode').val());
        location.reload();
    });

    $('#getcodeModel').on('show.bs.modal', function () {

        $.get('css/main.css', (maincss) => {

            $.get('js/raphael.min.js', (raphael) => {

                $.get('js/treant.min.js', (treant) => {

                    $('#generatedcode').text(`
<style>${maincss}</style>
<div id="organogram"></div>
<script>${raphael}</script>
<script>${treant}</script>
<script>${localStorage.getItem('organogram')} new Treant(og); </script>
                    `);
                });
            });
        });
    });
});
