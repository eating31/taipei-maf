import React, { useEffect, useContext } from 'react'
import { Button, Carousel, Image } from 'react-bootstrap';
import { Context } from '../../Contexts/Context'
import Finder from '../../API/Finder'
import test0 from '../../Image/logo.png'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useNavigate } from "react-router-dom";

function SingleActivity({ allActivity }) {
    const finder = Finder();
    const navigate = useNavigate();
    const { singleActivityId, setSingleActivityId } = useContext(Context)
    // const each = { "_id": 2, "type": "徵人", "place": "總統府", "createdAt": "2024-01-18", "clicked": 0, "photo": [test0, test0], "title": "北京奪走諾魯 駐美代表俞大㵢：只會增加台灣人反感", "description": "〔中央社〕諾魯共和國日前宣布與台灣斷交並與中國建交，駐美代表俞大㵢表示，北京想要將台灣納為己有的目標不會達成，北京透過奪走台灣邦交國的做法，只會讓台灣人民感受更加負面前白宮國安會台灣、中國與蒙古事務主任簡以榮（Ivan Kanapathy）在回覆中央社郵件詢問對諾魯在大選後立即宣布與台灣斷交的看法時表示，樂見美國國務院就諾魯的決定發出聲明，相信這有助於阻止更多案例發生。" }

    useEffect(() => {
        // 靜態網頁測試版
        if (process.env.REACT_APP_STATIC === 'true') {
            console.log('do nothing')
        } else {
            setTimeout(() => {
                finder.post('/common/activity/clicked', { _id: singleActivityId })
                    .then(data => {
                        console.log(data)
                    }).catch(err => {
                        console.log(err)
                    })
            }, [5000])
        }

    }, [singleActivityId])

    function handleGoRegister(code){
        navigate(`/activity/register/${code}`)
    }
    return (
        <div>
            {singleActivityId !== 0 &&
                <div>
                    {allActivity.map((each, index) => {
                        if (each._id === singleActivityId) {
                            return (
                                <>
                                    <div className='d-flex justify-content-between'>
                                        <p className='fs-4'> {each.title}</p>

                                        {/* TO DO 尚未開始報名(disable) */}
                                        <Button variant="info" className="text-white" onClick={() => handleGoRegister(each.code)}> 開始報名</Button>
                                    </div>
                                    {/* TO DO 報名截止 時間倒數計時 */}

                                    <Button variant="" style={{ textDecoration: 'none' }} onClick={() => setSingleActivityId(0)}> {'<'} 返回</Button>

                                    <div className='rounded-4 border p-4 mb-5 fs-5' style={{ backgroundColor: "rgba(129, 195, 215, 0.5)" }}>
                                        <p> 時間 ：{each.createdAt}</p>
                                        <p> 地點 ：{each.place}</p>
                                        <p> 描述 ：{each.description}</p>
                                        <PhotoProvider maskOpacity={0.5}>
                                            <Carousel>
                                                {each.photo.map((path, index) => {
                                                    return (

                                                        <Carousel.Item key={index}>
                                                            <PhotoView key={index} src={path}>
                                                                <Image src={path} fluid={true} style={{ height: 'auto', width: "100%", objectFit: 'cover' }} />
                                                            </PhotoView>
                                                        </Carousel.Item>

                                                    )
                                                })}
                                            </Carousel>
                                        </PhotoProvider>
                                    </div>

                                </>
                            )
                        }
                    })}

                </div>

            }

            {/* <Carousel.Item key={path}>
                                    <PhotoView key={path} src={process.env.REACT_APP_BACKEND_URL + path}>
                                        <Image src={process.env.REACT_APP_BACKEND_URL + path} fluid style={{ height: '350px', width: "100%", objectFit: 'cover' }} />
                                    </PhotoView>
                                </Carousel.Item> */}

        </div>
    )
}

export default SingleActivity