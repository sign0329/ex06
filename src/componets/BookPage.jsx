import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Button, Form } from 'react-bootstrap'

const BookPage = () => {
    const ref_query = useref
    const [loanding, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [is_end, setIs_end] = useState(false)
    const [query, setQuery] = useState('리액트');

    const getBooks = async () => {
        const url = "https://dapi.kakao.com/v3/search/book?target=title";
        const config = {
            headers: { "Authorization": "KakaoAK 6e91d252ac4cca8e658d2ec848e20eae" },
            params: { "query": query, "size": 6, "page": page }
        }
        setLoading(true);
        const result = await axios.get(url, config);
        setBooks(result.data.documents);
        setTotal(result.data.meta.pageable_count)
        setIs_end(result.data.meta.is_end);
        
        console.log(result);
        ref_query.current.focus();
        setLoading(false);


    }
    useEffect(() => {
        getBooks();
    }, [page])

    const onSumbit = (e) =>{
        e.preventDefault();
        getBooks();
    }
    if (loanding) return <h1 className='text-center my-5'>로딩중....</h1>
    return (
        <div>
            <Row className='my-5 mx-2'>
                <Row>
                    <Col className='mb-2'>
                        <Form onSubmit={onSumbit}>
                            <Form.Control value={query}
                                onChange={(e)=>setQuery(e.target.value)}
                                placeholeder='검색어'/>
                                ref={ref_query}
                        </Form>
                    </Col>
                    <Col> 검색수 : {total}건</Col>
                </Row>
                <hr />
                <Col>
                    <h1 className='text-center'>도서검색</h1>
                    <Row>

                        {books.map(book =>
                            <Col key={book.isbn} className='box m-2'>
                                <img src={book.thumbnail ? book.thumbnail : 'http:viaplaceholder.com/120x170'} />
                                <div className='ellipsis'>{book.title}</div>
                                <div>{book.fmPrice}원</div>
                            </Col>)}
                        <div className='text-center my-3'>
                            <Button disabled={page == 1 && true}
                                onClick={() => setPage(page - 1)}>이전</Button>
                            <span className='my-3 m-2'>{page}</span>
                            <Button disabled={is_end && true}
                                onClick={() => setPage(page + 1)}>다음</Button>

                        </div>
                    </Row>
                </Col>

            </Row>
        </div>
    )
}

export default BookPage