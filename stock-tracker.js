anychart.onDocumentReady(function () {
    anychart.data.loadCsvFile(
        'https://gist.githubusercontent.com/amkreddy555/fa6ee88fa276449031742d2453df95f7/raw/64bdb6f7fca5f18c97d9380cf7e8e6fd6921a6ca/starkstocks',
        function (data) {
            const dataTable = anychart.data.table();
            dataTable.addData(data);

            const mapping = dataTable.mapAs({
                open: 1,
                high: 2,
                low: 3,
                close: 4
            });

            const chart = anychart.stock();

            const plot = chart.plot(0);

            plot
                .ohlc()
                .data(mapping)
                .name('STARK');

            plot
                .yGrid(true)
                .xGrid(true)
                .yMinorGrid(true)
                .xMinorGrid(true);

            chart.scroller().area(dataTable.mapAs({ value: 4 }));

            chart.title('Stark Industries Pvt ltd - Stock Prices');

            chart.container('container');

            chart.draw();
        });
});