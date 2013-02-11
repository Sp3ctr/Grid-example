Ext.onReady(function() {

    Ext.define('myModel', {
        extend: 'Ext.data.Model',
        fields: ['company','price','change','pctChange','lastChange']
    });    
    
    var store = Ext.create('Ext.data.Store', {
        model: 'myModel',
        proxy: {
            type: 'ajax',
            url: '/examples/data/data.json',
            reader: {
                type: 'json',
                root: 'data'
            }
        },
        autoLoad: true,
        remoteSort: true
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
        title: 'Сортировка таблицы grid на сервере',
        renderTo: 'grid6',
        bbar: Ext.create('Ext.PagingToolbar', {
            store: store
        })        
    });
});
