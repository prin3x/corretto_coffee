import React, {useEffect, useState, useContext} from 'react';
import {Form, Input, Button, Rate} from 'antd';
import axios from '../../config/axios';
import {UserContext} from '../../context/UserContext';

const RatingSection = ({productId}) => {
  const [reviews, setReviews] = useState();
  const [form] = Form.useForm();

  const {role} = useContext(UserContext);

  const fetchReviews = async () => {
    axios
      .get(`/api/reviews/${productId}`)
      .then(result => setReviews(result.data));
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

  const onFinish = async values => {
    console.log('values:', values);
    await axios.post(`/api/reviews/${productId}`, {
      rating: values.rating,
      comment: values.review,
    });
    await fetchReviews();
    form.resetFields();
  };

  return (
    <div>
      {role === 'member' ? (
        <Form {...layout} name='nest-messages' onFinish={onFinish}>
          <Form.Item name='rating' initialValue={0}>
            <Rate />
          </Form.Item>
          <Form.Item name='review' label='Give a review' initialValue=''>
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      ) : null}
      {reviews &&
        reviews.map(comment => (
          <div key={comment.id}>
            <div className='name'>
              {comment.user_id}
              <Rate disabled defaultValue={comment.rating} />
            </div>
            <div>{comment.comment}</div>
            <div></div>
          </div>
        ))}
    </div>
  );
};

export default RatingSection;
