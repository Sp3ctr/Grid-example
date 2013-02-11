Ext.Loader.setPath('Ext.ux', '/ux');
Ext.require([
    'Ext.ux.grid.FiltersFeature',
]);

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

    var filters = {
        ftype: 'filters',
        local: true
    };

    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        features: [filters],        
        columns: [
        {
            text     : 'Company',
            dataIndex: 'company',
            filter: {
                type: 'string'
            }            
        },
        {
            text     : 'Price',
            dataIndex: 'price',
            filter: {
                type: 'float'
            }              
        },
        {
            text     : 'Change',
            dataIndex: 'change',
            filter: {
                type: 'int'
            }
        },
        {
            text     : '% Change',
            dataIndex: 'pctChange'
        },
        {
            text     : 'Last Updated',
            dataIndex: 'lastChange',
            filter: {
                type: 'date'
            }
        }
        ],
        height: 350,
        width: 600,
        title: 'Фильтрация полей grid на сервере',
        renderTo: 'grid7',
        bbar: Ext.create('Ext.PagingToolbar', {
            store: store
        })
    });
});