import styled from 'styled-components'

export const StyleDiv = styled.div`
    height: 275px;
    .info{
        height: 100px;
        background-color: #EBEBEB;
        display: flex;
        padding-left: 173px;
        .groupInfo{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 13px;
            font-weight: 400;
            margin-top: 10px;
            line-height: 20px;
            width: 111px;
            .titleInfo{
                font-weight: bold;
            }
        }
    }
    .question{
        display: flex;
        justify-content: center;
        padding-top: 2px;
        height: 25px;
        background-color: #78b43d;
        color: #ffffff;
        
        div{
            margin-right: 15px;
            margin-left: 15px;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 13px;
            font-weight: 600;
            margin-top :1px;
        }
        
    }
    .end{
        height: 150px;
        text-align: center;
        margin-left: 176px;
        margin-right: 176px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 13px;
        font-weight: 400;
        line-height: 18px;
        color: #7d7d7d;
        padding-top: 24px;
        .dmca{
            margin-top: 13px;
        }
        .up{
            right: 20px;
            bottom: 23px;
            position: fixed;
            height: 40px;
            width: 40px;
            opacity: 0.35;
            :hover{
                opacity: 0.8;
            }
        }
        .back{
            opacity: 0.6;
            right: 20px;
            bottom: 73px;
            position: fixed;
            height: 40px;
            width: 40px;
            :hover{
                opacity: 0.8;
            }
        }
    }
`
export const StyleImg = styled.img`
    display: ${props => props.scroll === true ? "inline" : "none"};
`