Ext.Loader.setPath('Ext.ux', '/ux');
Ext.require([
    'Ext.ux.grid.FiltersFeature',
]);

Ext.onReady(function() {

    Ext.define('myModel', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'weight', type: 'int'},
            {name: 'company', type: 'string'},
            {name: 'price', type: 'float'},
            {name: 'change', type: 'float'},
            {name: 'pctChange', type: 'float'},
            {name: 'lastChange', type: 'string'}
        ]
    });    
    
    var store = Ext.create('Ext.data.Store', {
        pageSize: 10,
        model: 'myModel',
        proxy: {
            type: 'ajax',
            url: '/examples/data/data2.json',
            reader: {
                type: 'json',
                root: 'data',
                totalProperty: 'totalCount'
            }
        },
        autoLoad: true,
        remoteSort: true
    });

    var filters = {
        ftype: 'filters',
        encode: true,
        local: false
    };

    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        features: [filters],        
        columns: [
        {
            text     : 'Weight',
            dataIndex: 'weight',
            width: 50,
            sortable: false,
            filter: {
                type: 'int'
            }            
        },
        {
            text     : 'Company',
            dataIndex: 'company',
            flex:1,
            filter: {
                type: 'string'
            }            
        },
        {
            text     : 'Price',
            dataIndex: 'price',
            flex:1,
            renderer: function(value){
                if(value > 75){
                    value = '<span style="color:#ff0000;">' + value + '</span>';
                } else {
                    value = '<span style="color:#00ff00;">' + value + '</span>';
                }
                return value;
            }
        },
        {
            text     : 'Change',
            flex:1,
            dataIndex: 'change'
        },
        {
            text     : '% Change',
            flex:1,
            dataIndex: 'pctChange'
        },
        {
            text     : 'Last Updated',
            flex:1,
            dataIndex: 'lastChange',
            filter: {
                type: 'date'
            }               
        }
        ],
        height: 350,
        width: 600,
        title: 'Наводим красоту...',
        renderTo: 'grid9',
        bbar: Ext.create('Ext.PagingToolbar', {
            store: store,
            displayInfo: true,
            displayMsg: 'Displaying topics {0} - {1} of {2}',
            emptyMsg: "No topics to display"
        })
    });
});
