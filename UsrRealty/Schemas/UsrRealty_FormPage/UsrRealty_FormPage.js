/* jshint esversion: 11 */
define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "859e8ea5-6ebe-4eb7-9a7d-fc095c585900",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ButtonAutomaticAddingOfVisit",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ButtonAutomaticAddingOfVisit_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"layoutConfig": {},
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAddRealtyVisitsProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"clickMode": "default",
					"icon": "edit-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPriceUSD_h7cjz7t",
					"labelPosition": "auto",
					"control": "$PDS_UsrPriceUSD_h7cjz7t"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_nst3lfm",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_nst3lfm"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommissionUSD_612fj9k",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommissionUSD_612fj9k",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_lzfh0at",
					"labelPosition": "above",
					"control": "$PDS_UsrType_lzfh0at",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_qsihtpq",
					"labelPosition": "above",
					"control": "$PDS_UsrOfferType_qsihtpq",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": false,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_lnmww9b",
					"labelPosition": "above",
					"control": "$PDS_UsrComment_lnmww9b",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_5t4a8zv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_5t4a8zv_label)#",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_fjouq4o",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_fjouq4o_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_1zkbumv",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_fjouq4o",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_x4ypbwm",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_1zkbumv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_z64sjtx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_z64sjtx_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_x4ypbwm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_2t9u823",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_2t9u823_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_zac5uh7DS"
						}
					}
				},
				"parentName": "FlexContainer_x4ypbwm",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_mfv1pfo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_mfv1pfo_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_x4ypbwm",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_6v20382",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_6v20382_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_zac5uh7"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_mfv1pfo",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_5g5fr3i",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_5g5fr3i_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_mfv1pfo",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_d2q0yug",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_d2q0yug_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_zac5uh7"
					]
				},
				"parentName": "FlexContainer_x4ypbwm",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_k7xw6w0",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_fjouq4o",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRealtyVisit",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 17
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_zac5uh7",
					"activeRow": "$GridDetail_zac5uh7_ActiveRow",
					"selectionState": "$GridDetail_zac5uh7_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_zac5uh7_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_zac5uh7DS_Id",
					"columns": [
						{
							"id": "b1008fb0-641c-1b01-334b-abce48a2f079",
							"code": "GridDetail_zac5uh7DS_UsrComment",
							"caption": "#ResourceString(GridDetail_zac5uh7DS_UsrComment)#",
							"dataValueType": 28,
							"width": 162.984375
						},
						{
							"id": "ae621289-8e23-98e9-9e71-0cf748deb185",
							"code": "GridDetail_zac5uh7DS_UsrVisitDateTime",
							"path": "UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_zac5uh7DS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "5ca6a409-51e1-6be9-6285-aa1a3ac87cfe",
							"code": "GridDetail_zac5uh7DS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_zac5uh7DS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 218.984375
						},
						{
							"id": "8ae397b4-eb2a-ae52-4642-af244cdde0d4",
							"code": "GridDetail_zac5uh7DS_UsrOwner",
							"path": "UsrOwner",
							"caption": "#ResourceString(GridDetail_zac5uh7DS_UsrOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						}
					],
					"bulkActions": []
				},
				"parentName": "GridContainer_k7xw6w0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_zac5uh7_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_zac5uh7DS",
							"filters": "$GridDetail_zac5uh7 | crt.ToCollectionFilters : 'GridDetail_zac5uh7' : $GridDetail_zac5uh7_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_zac5uh7_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetailRealtyVisit",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_zac5uh7_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_zac5uh7DS",
							"filters": "$GridDetail_zac5uh7 | crt.ToCollectionFilters : 'GridDetail_zac5uh7' : $GridDetail_zac5uh7_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_zac5uh7_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_zac5uh7_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_zac5uh7_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_zac5uh7",
							"filters": "$GridDetail_zac5uh7 | crt.ToCollectionFilters : 'GridDetail_zac5uh7' : $GridDetail_zac5uh7_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_zac5uh7_SelectionState"
						}
					}
				},
				"parentName": "GridDetailRealtyVisit",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_zac5uh7_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_zac5uh7DS",
							"filters": "$GridDetail_zac5uh7 | crt.ToCollectionFilters : 'GridDetail_zac5uh7' : $GridDetail_zac5uh7_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_zac5uh7_SelectionState"
						}
					}
				},
				"parentName": "GridDetailRealtyVisit",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPriceUSD_h7cjz7t": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_nst3lfm": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrComment_vn00e18": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrComment_lnmww9b": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						 "validators": {
                /* Flag the field as required. */
               		 "required": {
                    "type": "crt.Required"
                }
            }
					},
					"PDS_UsrType_tpflfg2": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrType_lzfh0at": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_qsihtpq": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrCommissionUSD_612fj9k": {
						"modelConfig": {
							"path": "PDS.UsrCommissionUSD"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"GridDetail_zac5uh7": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_zac5uh7DS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_zac5uh7DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_zac5uh7DS.UsrComment"
									}
								},
								"GridDetail_zac5uh7DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_zac5uh7DS.UsrVisitDateTime"
									}
								},
								"GridDetail_zac5uh7DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_zac5uh7DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_zac5uh7DS_UsrOwner": {
									"modelConfig": {
										"path": "GridDetail_zac5uh7DS.UsrOwner"
									}
								},
								"GridDetail_zac5uh7DS_Id": {
									"modelConfig": {
										"path": "GridDetail_zac5uh7DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_zac5uh7DS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_zac5uh7DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
handlers: /**SCHEMA_HANDLERS*/[
    {
        request: "crt.HandleViewModelAttributeChangeRequest",
        /* The custom implementation of the system query handler. */
        handler: async (request, next) => {
            if (request.attributeName === 'PDS_UsrPriceUSD_h7cjz7t' || request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent') {
                var price = await request.$context.PDS_UsrPriceUSD_h7cjz7t;
                var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;
                var commission = price * percent / 100;
                request.$context.PDS_UsrCommissionUSD_612fj9k = commission;
            }
            /* Call the next handler if it exists and return its result. */
            return next?.handle(request);
        }
    },

	    {
        request: "crt.HandleViewModelAttributeChangeRequest",
        /* The custom implementation of the system query handler. */
        handler: async (request, next) => {
            
               const priceUSD = await request.$context.PDS_UsrPriceUSD_h7cjz7t;
            	const comment = await request.$context.PDS_UsrComment_lnmww9b;
              
                 if (priceUSD > 10000) {
                    /* If the request is new, apply the required validator to the UsrDescription attribute. */
                    request.$context.enableAttributeValidator('PDS_UsrComment_lnmww9b', 'required');
                } else {
                    /* Do not apply the required validator to the UsrDescription attribute for non-new requests. */
                    request.$context.disableAttributeValidator('PDS_UsrComment_lnmww9b', 'required');
                }
           
            /* Call the next handler if it exists and return its result. */
            return next?.handle(request);
        }
    }
]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
						/* The validator type must contain a vendor prefix.
						Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value > minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});