import { alpha, createTheme, ThemeOptions } from '@mui/material/styles';

//Temp Code
export const color = {
  MarketingSolar: '#96B7C0',
  MarketingLightSolar: '#CADADF',
  Neutral50: '#EEEDEF',
  Neutral200: '#C2C1C8',
  Neutral400: '#8F8C9A',
  Neutral800: '#252429',
  GreyMedium: '#8F8C9A',
  ShadesWhite: '#FFFFFF',
  Primary500: '#B2613A',
  TransparenciesSecondaryMain25: '#B2613A40',
  Primary100: '#E7C7B7',
  TertiaryMain: '#DEC7AC',
  SuccessMain: '#2E7D32',
  ErrorMain: '#D32F2F',
  ErrorLight: '#FBEAEA',
  Error100: '#FEE2E2',
  DarkBlue: '#1976D2',
  DarkBlueLight: '#1976D280',
  MapYellow: '#F4AA3B'
};
//: Later move it to Link-Ui-Core package

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    secondary: true;
    secondarydark: true;
    secondarydarkdisabled: true;
    primary: true;
    primarydark: true;
    primaryError: true;
    tertiary: true;
    tertiarydark: true;
    navigation: true;
    page: true;
    primaryerror: true;
    primaryerrorlight: true;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    radiolabel: true;
    radiolabeldisabled: true;
    subtitle3: true;
    subtitle2: true;
  }
}

const OverrideOptions: ThemeOptions = {
  typography: {
    h3: {
      fontSize: 36,
      fontFamily: 'Outfit'
    },
    h4: {
      fontSize: 28
    },
    h5: {
      fontSize: 19
    },
    body2: {
      fontSize: 12
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontWeight: 600,
          letterSpacing: 2,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          ...(ownerState.variant === 'outlined' && {
            border: '1px solid',
            textTransform: 'none',
            '&:hover': {
              border: '1px solid'
            }
          }),
          ...(ownerState.variant === 'contained' && {
            '&:hover': {
              border: '1px solid'
            },
            border: '1px solid'
          }),
          textTransform: 'none',

          '&.Mui-disabled': {
            color: color.Neutral400,
            backgroundColor: color.Neutral200
          },
          '& .MuiSvgIcon-root': {
            marginLeft: '1px',
            marginRight: '1px'
          },

          '& .MuiButton-startIcon': {
            marginRight: '2px'
          },
          '& .MuiButton-endIcon': {
            marginLeft: '2px'
          }
        }),
        sizeLarge: {
          fontSize: '16px'
        },
        sizeMedium: {
          fontSize: '14px'
        },
        sizeSmall: {
          fontSize: '11px'
        }
      },
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            backgroundColor: color.ShadesWhite,
            color: color.Neutral800,
            textTransform: 'uppercase',
            display: 'flex',
            padding: '6px 10px',
            minWidth: '120px',
            borderRadius: '4px !important',
            '&:hover, &.Mui-selected, &.Mui-selected:hover': {
              backgroundColor: color.ShadesWhite,
              color: color.Neutral800
            },
            '&.MuiButton-primaryError': {
              backgroundColor: color.ShadesWhite,
              color: color.ErrorMain,
              border: `1.5px solid ${color.ErrorMain} !important`,

              '&.Mui-disabled': {
                color: color.Neutral400,
                backgroundColor: color.Neutral200,
                border: `1.5px solid ${color.Neutral400} !important`
              }
            }
          }
        },
        {
          props: { variant: 'primarydark' },
          style: {
            backgroundColor: color.Neutral800,
            color: color.ShadesWhite,
            textTransform: 'uppercase',
            display: 'flex',
            padding: '8px 10px',
            minWidth: '120px',
            borderRadius: '4px !important',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#5d5b66'
            },
            '&.Mui-selected, &.Mui-selected:hover': {
              backgroundColor: color.ShadesWhite,
              color: color.Neutral800
            }
          }
        },
        {
          props: { variant: 'secondary' },
          style: {
            backgroundColor: color.ShadesWhite,
            color: color.Neutral800,
            textTransform: 'uppercase',
            border: `1.5px solid ${color.Neutral800} !important`,
            padding: '6px 10px',
            minWidth: '120px',
            borderRadius: '4px !important',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: color.Neutral800,
              color: color.ShadesWhite
            },
            '&.Mui-selected, &.Mui-selected:hover': {
              backgroundColor: color.Neutral200,
              color: color.Neutral800,
              border: `1.5px solid ${color.Neutral800} !important`
            }
          }
        },
        {
          props: { variant: 'secondarydark' },
          style: {
            backgroundColor: color.Neutral800,
            color: color.ShadesWhite,
            textTransform: 'uppercase',
            display: 'flex',
            border: `1.5px solid ${color.ShadesWhite} !important`,
            padding: '6px 10px',
            minWidth: '120px',
            borderRadius: '4px !important',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#5d5b66'
            },
            '&.Mui-selected, &.Mui-selected:hover': {
              backgroundColor: color.ShadesWhite,
              color: color.Neutral800,
              border: `1.5px solid ${color.Neutral800} !important`
            }
          }
        },
        {
          props: { variant: 'tertiary' },
          style: {
            backgroundColor: 'transparent',
            color: color.Neutral800,
            textTransform: 'uppercase',
            padding: '6px 10px',
            minWidth: '120px',
            borderRadius: '4px !important',
            justifyContent: 'center',
            '&:hover, &.Mui-selected, &.Mui-selected:hover': {
              backgroundColor: color.ShadesWhite,
              color: color.Neutral800
            }
          }
        },
        {
          props: { variant: 'tertiarydark' },
          style: {
            font: 'TT Hoves Variable', //Please Check if Font is installed in Link-Ui-Core.
            lineheight: '19px',
            border: `none`,
            borderRadius: '0px',
            color: color.ShadesWhite,
            background: color.Neutral800,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 16px',
            gap: '8px',
            '&:hover': {
              backgroundColor: color.Neutral800
            }
          }
        },
        {
          props: { variant: 'navigation' },
          style: {
            font: 'TT Hoves Variable', //Please Check if Font is installed in Link-Ui-Core.
            backgroundColor: color.Neutral800, //'#96b7c0',
            color: color.ShadesWhite, //color.Neutral800,
            borderRadius: '100px',
            width: '16px !important',
            height: '16px !important',
            minWidth: '0px !important',
            padding: '5px',
            fontSize: 'small',
            marginRight: '5px',
            '&:hover': {
              backgroundColor: color.Neutral400
            }
          }
        },
        {
          props: { variant: 'page' },
          style: {
            backgroundColor: '',
            color: color.Neutral800,
            borderRadius: '0px',
            // width: "16px !important",
            height: '16px !important',
            minWidth: '0px !important',
            padding: '5px',
            fontSize: '12px',
            borderBottom: '',
            // marginRight: "5px",
            fontWeight: '100 !important',

            '&.activepage': {
              borderBottom: `2px solid ${color.Primary500}`,
              fontWeight: '600 !important'
            }
          }
        },
        {
          props: { variant: 'primaryerror' },
          style: {
            backgroundColor: color.ShadesWhite,
            color: color.ErrorMain,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            border: `2px solid ${color.ErrorMain}`,
            borderRadius: '4px !important',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: color.ErrorMain,
              color: color.ShadesWhite
            }
          }
        },
        {
          props: { variant: 'primaryerrorlight' },
          style: {
            backgroundColor: color.ErrorMain,
            color: color.ShadesWhite,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            border: `2px solid ${color.ErrorMain}`,
            borderRadius: '4px !important',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: color.ShadesWhite,
              color: color.ErrorMain
            }
          }
        }
      ]
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          '&.MapToggle': {
            border: '2px solid ',
            borderColor: '#96B7C0',
            borderRadius: '40px',
            height: '35px',
            backgroundColor: color.Neutral800,
            font: 'TT Hoves Variable',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '17px',
            textAlign: 'center',
            color: color.ShadesWhite,

            '& .MuiToggleButton-root.MapToggleButton': {
              fontSize: 14,
              border: 'none',
              backgroundColor: 'transparent'
            },

            '& .MuiToggleButtonGroup-grouped': {
              textTransform: 'none',
              margin: 3,
              background: color.Neutral800,
              border: 0,
              color: color.ShadesWhite,

              '&.Mui-selected': {
                borderRadius: '30px',
                backgroundColor: color.ShadesWhite,
                color: color.Neutral800,
                fonFamily: 'TTHOVES',
                font: 'TT Hoves Variable',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '17px',
                textAlign: 'center'
              }
            },

            '&.inverse': {
              backgroundColor: color.ShadesWhite,
              borderColor: 'transparent',

              '& .MuiToggleButton-root.MapToggleButton': {
                color: color.Neutral800
              },
              '& .MuiToggleButtonGroup-grouped': {
                backgroundColor: 'transparent', //color.Neutral800,

                '&.Mui-selected': {
                  backgroundColor: color.Neutral800, //'#C2C1C8',
                  color: color.ShadesWhite //color.Neutral800,
                }
              }
            },

            '& .MuiToggleButtonGroup-grouped:not(:last-of-type)': {
              marginLeft: '2px !important'
            }
          }
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          backgroundColor: color.Neutral800,
          color: color.ShadesWhite,
          textTransform: 'uppercase',
          display: 'flex',
          fontSize: 12,
          letterSpacing: 0.6,
          border: `1px solid ${color.ShadesWhite}`,
          padding: '6px 10px',
          borderRadius: '4px',
          justifyContent: 'space-between',

          '&:hover': {
            backgroundColor: '#5d5b66'
          },

          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: color.ShadesWhite,
            color: color.Neutral800,
            border: `1x solid ${color.Neutral800}`
          },

          '&.MuiToggleButtonGroup-grouped:not(:last-of-type), &.MuiToggleButtonGroup-grouped:not(:first-of-type)':
            {
              border: `1px solid ${color.ShadesWhite}`,
              borderRadius: '4px',
              marginLeft: 0
            }
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          flexDirection: 'column'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            backgroundColor: `${color.Error100} !important`
          }
        }
      }
    },

    MuiAutocomplete: {
      defaultProps: {},
      styleOverrides: {
        popper: {
          '& .paper-filled': {
            backgroundColor: color.Neutral800,
            border: '1px solid #999',
            color: '#ccc'
          }
        },
        root: {
          '& .Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: `${color.ErrorMain} !important`
          }
        },
        popupIndicator: {}
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.paper-outlined': {
            backgroundColor: color.Neutral50
          }
        }
      }
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            //backgroundColor: color.Neutral50
          }
        },
        paper: {
          '&.paper-filled': {
            backgroundColor: color.Neutral800,
            border: '1px solid #999',
            color: '#ccc'
          }
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          '&.RoundedCorner .MuiPaper-root': {
            borderRadius: '0px 0px 0px 40px'
          }
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '16px'
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '16px'
        }
      }
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'subtitle2' },
          style: {
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '20px',
            color: color.Neutral800
          }
        },
        {
          props: { variant: 'subtitle3' },
          style: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '20px',
            color: color.Neutral800
          }
        },
        {
          props: { variant: 'radiolabel' },
          style: {
            fontWeight: '500',
            fontSize: '12px',
            color: color.Neutral800,
            fontFamily: 'TTHOVES',
            font: 'TT Hoves Variable'
          }
        },
        {
          props: { variant: 'radiolabeldisabled' },
          style: {
            fontWeight: '500',
            fontSize: '12px',
            color: color.Neutral200,
            fontFamily: 'TTHOVES',
            font: 'TT Hoves Variable'
          }
        }
      ]
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          '& .MuiFormHelperText-root': {
            color: color.Neutral800,
            fontSize: 14,
            '&.Mui-error': {
              color: color.ErrorMain
            }
          },
          '& .MuiInputBase-root': {
            minHeight: 40,
            '&:focus': {
              border: `1px ${color.Primary500}`,
              borderRadius: '4px'
            },
            '&:hover': {
              borderColor: alpha(color.Primary500, 0.23),
              boxShadow: 'none',
              opacity: 100
            }
          },
          ...(ownerState.variant === 'outlined' && {
            '& .MuiOutlinedInput-root': {
              backgroundColor: color.Neutral50,
              height: 'auto',
              maxHeight: 40
            }
          }),
          ...(ownerState.variant === 'filled' && {
            '& .MuiInputBase-root': {
              color: color.ShadesWhite,
              border: `1px solid`,
              borderColor: alpha(color.Neutral400, 0.7),
              borderRadius: '4px',
              padding: 0,

              '&:hover': {
                borderColor: color.ShadesWhite,
                border: `1px solid ${color.Neutral400}`,
                boxShadow: 'none',
                opacity: 100
              },

              '&.MuiAutocomplete-inputRoot': {
                paddingTop: 4,
                paddingBottom: 4,
                paddingRight: 8,
                paddingLeft: 8
              },

              '&.MuiFilledInput-root:after': {
                transition: 'none',
                borderColor: 'transparent'
              },
              '&.MuiFilledInput-underline:before': {
                transition: 'none',
                borderColor: 'transparent'
              },
              '&.Mui-focused': {
                border: `1px solid ${color.Primary500}`,
                backgroundColor: 'transparent',
                borderRadius: '4px'
              },
              '&.Mui-error': {
                borderColor: `${color.ErrorMain} !important`,
                '& .MuiInputBase-input': {
                  color: color.Neutral800
                },
                '& .MuiSvgIcon-root': {
                  fill: color.Neutral800
                }
              }
            },
            '& .MuiSvgIcon-root': { fill: color.ShadesWhite },
            '& .MuiInputAdornment-root': {
              color: color.ShadesWhite,
              '& .MuiSvgIcon-root': { fill: color.ShadesWhite },
              '&.MuiInputAdornment-positionStart': {
                marginTop: '0px !important'
              }
            },

            '& .MuiInputBase-input': {
              backgroundColor: 'transparent',
              paddingLeft: '12px',
              paddingTop: '8px',
              paddingBottom: '8px',
              color: color.ShadesWhite
            },
            '& .MuiChip-root': {
              backgroundColor: color.Neutral800,
              color: color.ShadesWhite,
              '& .MuiSvgIcon-root': { fill: color.ShadesWhite }
            }
          })
        })
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          padding: '3px 4px'
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&:hover': {
            color: color.Primary100,
            padding: '0px',
            margin: '9px',
            outline: `1px solid ${color.Primary500}`,
            overflow: 'hidden'
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
            rect: {
              fill: color.Primary100
            },
            path: {
              fill: color.Primary500
            }
          }
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '&.light-checkbox': {
            '& .MuiTypography-root': {
              fontSize: '14px',
              fontWeight: 600,
              width: '161px'
            }
          }
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        modal: {
          inset: ' unset',
          '& .MuiBackdrop-root': {
            inset: ' unset'
          }
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 8,
          '& .MuiSwitch-track': {
            borderRadius: 22 / 2
          },

          '& .MuiSwitch-switchBase': {
            '& + .MuiSwitch-track': {
              backgroundColor: color.Neutral400,
              opacity: 1
            },
            '&.Mui-checked': {
              '& + .MuiSwitch-track': {
                backgroundColor: color.Primary500,
                opacity: 1
              }
            }
          },
          '& .MuiSwitch-switchBase:hover': {
            '& + .MuiSwitch-track': {
              backgroundColor: color.Primary500,
              opacity: 0.6
            }
          },

          '& .MuiSwitch-thumb': {
            boxShadow: 'none',
            color: color.ShadesWhite,
            width: 16,
            height: 16,
            margin: 2
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          font: 'TT Hoves Variable', //Please Check if Font is installed in Link-Ui-Core.
          fontSize: '12px',
          fontWeight: '500',
          lineheight: '16px',
          borderRadius: '4px',
          '&.defaultlight': {
            color: color.Neutral800,
            background: color.ShadesWhite,
            border: `0.5px solid ${color.Neutral800}`,
            '.MuiSvgIcon-root': {
              fill: color.Neutral800
            }
          },
          '&.defaultdark': {
            color: color.ShadesWhite,
            background: color.Neutral800,
            border: `0.5px solid ${color.ShadesWhite}`
          },
          '&:hover': {
            '.MuiSvgIcon-root': {
              fill: color.Primary500
            }
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          fill: color.Neutral800
        }
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-active': {
            color: color.Primary500
          },
          '&.Mui-completed': {
            color: color.Neutral800
          }
        }
      }
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          left: 'calc(-50% + 12px)',
          right: 'calc(50% + 12px)'
        }
      }
    }
  },
  zIndex: {
    snackbar: 10000
  }
};

export const theme = createTheme(OverrideOptions);
