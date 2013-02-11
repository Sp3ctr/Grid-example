Ext.onReady(function() {

    var myData = [
        {
            company: 'Alcoa Inc',
            price: 71.72,
            change: 0.02,
            pctChange: 0.03,
            lastChange: '9/1 12:00am'
        },
        {
            company: 'Altria Group Inc',
            price: 83.81,
            change: 0.28,
            pctChange: 0.34,
            lastChange: '9/1 12:00am'
        },
        {
            company: 'American International Group, Inc.',
            price: 81.82,
            change: 0.12,
            pctChange: 0.63,
            lastChange: '9/1 12:00am'
        }
    ];
    
     Ext.define('Model', {
        extend: 'Ext.data.Model',
        fields: ['company','price','change','pctChange','lastChange']
     });    
    
     var store = Ext.create('Ext.data.Store', {
        model: 'Model',
        data: myData
    });

    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        columns: [
        {
            text     : 'Company',
            dataIndex: 'company'
        },
        {
            text     : 'Price',
            dataIndex: 'price'
        },
        {
            text     : 'Change',
            dataIndex: 'change'
        },
        {
            text     : '% Change',
            dataIndex: 'pctChange'
        },
        {
            text     : 'Last Updated',
            dataIndex: 'lastChange'
        }
        ],
        height: 350,
        width: 600,
        title: 'Простейшая статическая таблица grid + Ext.data.Store + Ext.data.Model',
        renderTo: 'grid3'
    });
});