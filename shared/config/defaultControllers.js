const gstatus = {
    G_Inflexion_Angle: 0,
    G_Inflexion_Force: 0,
    ac_run: false,
    alarm_code: 0,
    alarmed: false,
    anybustype: 1,
    busy: false,
    controller_sn: "LX202109290010",
    daq_temp: 29,
    dev_id: 9,
    dev_name: "Line1-0.9",
    enablesrc: 0,
    eopos: 0,
    exsensorval: 0,
    fail_code: 0,
    heartbit: 1690949119522.906,
    io_ival: 0,
    io_oval: 2,
    isok: false,
    job: 0,
    jobChartItems: 0,
    job_enable: false,
    job_pset_mode: 0,
    job_src: 1,
    jogstr: false,
    keeprun: false,
    nc_state: 4,
    offline: 0,
    points_cnt: 10000,
    pos: 0,
    power_on: false,
    pset: 1,
    psetsrc: 6,
    ready: true,
    ret_batches: 0,
    ret_cnt: 0,
    ret_pos: 0,
    ret_pos_max: 0,
    ret_pos_min: 0,
    ret_sensor: 0,
    ret_sensor_max: 0,
    ret_sensor_min: 0,
    ret_sn: "",
    reversed: false,
    rok: false,
    scanner_endsymbl: 13,
    sensor: 0,
    sensor_max: 6,
    speed: 0,
    speed_max: 20.5,
    spindle_tranlationratio: 0.06715899705886841,
    temp: "[46.1℃] [20%]",
    tid: 758898,
    tool_sn: "SN4613213",
    toolsrc: 1,
    trqsensorcalib_normaltorque: 6,
    trqsensorcalib_sensitivity: 0.7497000098228455,
}


module.exports.defaultBYDConfigs = {
    dev: {
        cfg_base_info: {
            device_name: "Line1-0.9",
            device_id: 9,
            device_time: "2023-8-1 9:57:53",
            max_speed: 20.5,
            max_torque: 6
        },
        ver: {
            em_hardver: "0.1.0",
            em_softver: "1.4.37",
            hand_version: "AT:0.5.7",
            mcu_version: "1.2.4D22.12.21",
            webapiver: "V1.5.2-731"
        },
        cfg_ctrl_src: {
            alarm_reset: false,
            ccw_limit: 7.5,
            ccw_mode: 2,
            ccw_speed: 1.6666669845581055,
            human_stop: false,
            job_enable: false,
            job_pset_mode: 0,
            job_src: 1,
            power_enable: 0,
            press_run: false,
            pset: 6,
            result_reset: false,
            sn_src: 6,
            tool_run: 1,

        },
        cfg_net_op: {
            ip: "192.168.20.145",
            port: 9101,
            use_op: true,
            server_ip: "192.168.20.100",
            server_enable: false
        },
        cfg_serial_rs232: {
            WSI: {
                serial_port: "WSI",
                baud_rate: 500000,
                end_symbl: 9,
                data_bits: 8,
                stop_bits: 1,
                parity: 0,
                enable: false
            },
            SCANER: {
                serial_port: "SCANER",
                baud_rate: 115200,
                end_symbl: 13,
                data_bits: 8,
                stop_bits: 1,
                parity: 0,
                enable: false
            }
        },
    },
    bus: {
        io_cfg_upload: {
            ToolIn: {
                ByteLength: 1,
                Member: [
                    {
                        StartByte: 0.1,
                        BitLength: 1,
                        LinkSdo: "0x300423",
                        Not: 0
                    },
                    {
                        StartByte: 0.2,
                        BitLength: 1,
                        LinkSdo: "0x300424",
                        Not: 0
                    },
                    {
                        StartByte: 0.3,
                        BitLength: 1,
                        LinkSdo: "0x300425",
                        Not: 0
                    },
                    {
                        StartByte: 0.4,
                        BitLength: 1,
                        LinkSdo: "0x300426",
                        Not: 0
                    },
                    {
                        StartByte: 0.5,
                        BitLength: 1,
                        LinkSdo: "0x300427",
                        Not: 0
                    },
                    {
                        StartByte: 0.6,
                        BitLength: 1,
                        LinkSdo: "0x300428",
                        Not: 0
                    },
                    {
                        StartByte: 0.7,
                        BitLength: 1,
                        LinkSdo: "0x300429",
                        Not: 0
                    }
                ]
            },
            ToolOut: {
                ByteLength: 1,
                Member: [
                    {
                        StartByte: 0,
                        BitLength: 1,
                        LinkSdo: "0x300205"
                    },
                    {
                        StartByte: 0.1,
                        BitLength: 1,
                        LinkSdo: "0x300204"
                    },
                    {
                        StartByte: 0.2,
                        BitLength: 1,
                        LinkSdo: "0x300433"
                    },
                    {
                        StartByte: 0.3,
                        BitLength: 1,
                        LinkSdo: "0x300434"
                    },
                    {
                        StartByte: 0.4,
                        BitLength: 1,
                        LinkSdo: "0x300435"
                    },
                    {
                        StartByte: 0.5,
                        BitLength: 1,
                        LinkSdo: "0x300436"
                    },
                    {
                        StartByte: 0.6,
                        BitLength: 1,
                        LinkSdo: "0x300437"
                    },
                    {
                        StartByte: 0.7,
                        BitLength: 1,
                        LinkSdo: "0x300438"
                    }
                ]
            }
        },
        fieldbus_cfg_upload: {
            Type: "FieldBus",
            NumeralByteOrder: "1234",
            StringByteOrder: "DCBA",
            ToolIn: {
                ByteLength: 220,
                Member: [
                    {
                        StartByte: 0,
                        BitLength: 48,
                        LinkSdo: "0x300831",
                        type: 12
                    },
                    {
                        StartByte: 18,
                        BitLength: 8,
                        LinkSdo: "0x30010A",
                        type: 3
                    }
                ]
            },
            ToolOut: {
                ByteLength: 220,
                Member: [
                    {
                        StartByte: 0,
                        BitLength: 1,
                        LinkSdo: "0x300102",
                        type: 1
                    },
                    {
                        StartByte: 0.1,
                        BitLength: 1,
                        LinkSdo: "0x300204",
                        type: 1
                    },
                    {
                        StartByte: 0.2,
                        BitLength: 1,
                        LinkSdo: "0x300205",
                        type: 1
                    },
                    {
                        StartByte: 0.30000000000000004,
                        BitLength: 1,
                        LinkSdo: "0x300209",
                        type: 1
                    },
                    {
                        StartByte: 0.4,
                        BitLength: 1,
                        LinkSdo: "0x300207",
                        type: 1
                    },
                    {
                        StartByte: 0.5,
                        BitLength: 1,
                        LinkSdo: "0x300208",
                        type: 1
                    },
                    {
                        StartByte: 0.6000000000000001,
                        BitLength: 1,
                        LinkSdo: "0x300409",
                        type: 1
                    },
                    {
                        StartByte: 4,
                        BitLength: 8,
                        LinkSdo: "0x30020A",
                        type: 3
                    },
                    {
                        StartByte: 6,
                        BitLength: 24,
                        LinkSdo: "0x300831",
                        type: 12
                    },
                    {
                        StartByte: 0.7000000000000001,
                        BitLength: 1,
                        LinkSdo: "0x300814",
                        type: 1
                    },
                    {
                        StartByte: 1,
                        BitLength: 1,
                        LinkSdo: "0x300811",
                        type: 1
                    },
                    {
                        StartByte: 10,
                        BitLength: 32,
                        LinkSdo: "0x300806",
                        type: 10
                    },
                    {
                        StartByte: 2,
                        BitLength: 16,
                        LinkSdo: "0x30020B",
                        type: 5
                    },
                    {
                        StartByte: 14,
                        BitLength: 32,
                        LinkSdo: "0x30081E",
                        type: 10
                    }
                ]
            }
        },
        sn_ctrl_upload: {
            CharMap: [
                {
                    Char: "1",
                    Pset: 1
                },
                {
                    Char: "2",
                    Pset: 1
                }
            ],
            Direction: 0,
            VerifySize: 0,
            CharVerify: 0,
            VerifyChar: "",
            SnSize: 10,
            StartBit: 3,
            Len: 1,
            VerifyBit: 3
        },
    },
    ws: gstatus,
}

