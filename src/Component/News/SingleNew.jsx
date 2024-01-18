import React, { useContext } from 'react'
import { Button, Row, Col, Image } from 'react-bootstrap'
import { Context } from '../../Contexts/Context'

function SingleNew({ allNews }) {
    const { singleNewId, setSingleNewId } = useContext(Context)


    return (
        <div>
            <Button  variant="" style={{ textDecoration: 'none' }} onClick={() => setSingleNewId(0)}> {'<'} 返回</Button>
            <div>
                {singleNewId !== 0 &&
                    <div>
                        {allNews.map((each, index) => {
                            if (each.id === singleNewId) {
                                return (
                                    <>
                                        <div key={each.id} className='p-4 m-2 rounded-4' style={{ backgroundColor: "yellow" }}>
                                            <div className='fs-2 py-3'>{each.title}</div>
                                            <div className='d-flex justify-content-start'>
                                                <p className='pe-3'>閱讀次數 : {each.clicked}</p>
                                                <p>發布時間 : {each.createdAt}</p>
                                            </div>

                                            <p className='fs-5'>{each.content}</p>
                                            {/* 其他欄位 檔案之類的 */}
                                        </div>
                                        <div className='d-flex justify-content-between px-5 py-3'>
                                            {index !== 0 && <Button  variant="" style={{ textDecoration: 'none' }} onClick={() => setSingleNewId(allNews[index - 1].id)}>上一篇</Button>}
                                            {index !== allNews.length - 1 && <Button  variant="" style={{ textDecoration: 'none' }} onClick={() => setSingleNewId(allNews[index + 1].id)}>下一篇</Button>}
                                        </div>
                                    </>
                                );
                            }
                            return null; // 如果找不到符合的物件，回傳null
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default SingleNew