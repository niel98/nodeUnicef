import axios from 'axios'

const res = {
    "id": 1,
    "question_text": "What do you know about unicef?",
    "response_type": "option_type",
    "createdAt": "2020-11-04T14:19:54.000Z",
    "updatedAt": "2020-11-04T14:19:54.000Z",
    "QuestionCategoryId": 1,
    "SurveyId": 1,
    "SurveySectionHeaderId": 1,
    "questionanswers": [
        {
            "id": 1,
            "UserId": 1,
            "QuestionId": 1,
            "response_type": "option_type",
            "question_answer_text": "PARASTATALS",
            "long": "23.33",
            "lat": "33.45",
            "createdAt": "2020-11-04T14:36:54.000Z",
            "updatedAt": "2020-11-04T14:36:54.000Z"
        },
        {
            "id": 2,
            "UserId": 1,
            "QuestionId": 1,
            "response_type": "option_type",
            "question_answer_text": "SERVICES",
            "long": "23.33",
            "lat": "33.45",
            "createdAt": "2020-11-04T14:36:54.000Z",
            "updatedAt": "2020-11-04T14:36:54.000Z"
        },
        {
            "id": 6,
            "UserId": 1,
            "QuestionId": 1,
            "response_type": "option_type",
            "question_answer_text": "PARASTATALS",
            "long": "23.33",
            "lat": "33.45",
            "createdAt": "2020-11-05T16:04:30.000Z",
            "updatedAt": "2020-11-05T16:04:30.000Z"
        },
        {
            "id": 6,
            "UserId": 1,
            "QuestionId": 1,
            "response_type": "option_type",
            "question_answer_text": "SERVICES",
            "long": "23.33",
            "lat": "33.45",
            "createdAt": "2020-11-05T16:04:30.000Z",
            "updatedAt": "2020-11-05T16:04:30.000Z"
        },
        {
            "id": 6,
            "UserId": 1,
            "QuestionId": 1,
            "response_type": "option_type",
            "question_answer_text": "SERVICES",
            "long": "23.33",
            "lat": "33.45",
            "createdAt": "2020-11-05T16:04:30.000Z",
            "updatedAt": "2020-11-05T16:04:30.000Z"
        },
        {
            "id": 6,
            "UserId": 1,
            "QuestionId": 1,
            "response_type": "option_type",
            "question_answer_text": "SERVICES",
            "long": "23.33",
            "lat": "33.45",
            "createdAt": "2020-11-05T16:04:30.000Z",
            "updatedAt": "2020-11-05T16:04:30.000Z"
        },
        {
            "id": 6,
            "UserId": 1,
            "QuestionId": 1,
            "response_type": "option_type",
            "question_answer_text": "NGO",
            "long": "23.33",
            "lat": "33.45",
            "createdAt": "2020-11-05T16:04:30.000Z",
            "updatedAt": "2020-11-05T16:04:30.000Z"
        }
    ]
}

// const res = {
//     "message": "Responses fetched successfully",
//     "success": true,
//     "data": [
//         {
//             "id": 1,
//             "question_text": "What do you know about unicef?",
//             "response_type": "option_type",
//             "createdAt": "2020-11-04T14:19:54.000Z",
//             "updatedAt": "2020-11-04T14:19:54.000Z",
//             "QuestionCategoryId": 1,
//             "SurveyId": 1,
//             "SurveySectionHeaderId": 1,
//             "questionanswers": [
//                 {
//                     "id": 1,
//                     "UserId": 1,
//                     "QuestionId": 1,
//                     "response_type": "option_type",
//                     "question_answer_text": "PARASTATALS",
//                     "long": "23.33",
//                     "lat": "33.45",
//                     "createdAt": "2020-11-04T14:36:54.000Z",
//                     "updatedAt": "2020-11-04T14:36:54.000Z"
//                 },
//                 {
//                     "id": 2,
//                     "UserId": 1,
//                     "QuestionId": 1,
//                     "response_type": "option_type",
//                     "question_answer_text": "SERVICES",
//                     "long": "23.33",
//                     "lat": "33.45",
//                     "createdAt": "2020-11-04T14:36:54.000Z",
//                     "updatedAt": "2020-11-04T14:36:54.000Z"
//                 },
//                 {
//                     "id": 6,
//                     "UserId": 1,
//                     "QuestionId": 1,
//                     "response_type": "option_type",
//                     "question_answer_text": "PARASTATALS",
//                     "long": "23.33",
//                     "lat": "33.45",
//                     "createdAt": "2020-11-05T16:04:30.000Z",
//                     "updatedAt": "2020-11-05T16:04:30.000Z"
//                 }
//             ]
//         },
//         {
//             "id": 2,
//             "question_text": "What do you know about unicef?",
//             "response_type": "multi_option_type",
//             "createdAt": "2020-11-04T14:20:08.000Z",
//             "updatedAt": "2020-11-04T14:20:08.000Z",
//             "QuestionCategoryId": 1,
//             "SurveyId": 1,
//             "SurveySectionHeaderId": 1,
//             "questionanswers": [
//                 {
//                     "id": 2,
//                     "UserId": 1,
//                     "QuestionId": 2,
//                     "response_type": "multi_option_type",
//                     "question_answer_text": "PARASTATALS,GOBERNMENT",
//                     "long": "23.33",
//                     "lat": "33.45",
//                     "createdAt": "2020-11-04T14:36:54.000Z",
//                     "updatedAt": "2020-11-04T14:36:54.000Z"
//                 },
//                 {
//                     "id": 7,
//                     "UserId": 1,
//                     "QuestionId": 2,
//                     "response_type": "multi_option_type",
//                     "question_answer_text": "PARASTATALS,GOBERNMENT",
//                     "long": "23.33",
//                     "lat": "33.45",
//                     "createdAt": "2020-11-05T16:04:30.000Z",
//                     "updatedAt": "2020-11-05T16:04:30.000Z"
//                 }
//             ]
//         },
//         {
//             "id": 3,
//             "question_text": "What do you know about unicef?",
//             "response_type": "single_option_type",
//             "createdAt": "2020-11-04T14:20:17.000Z",
//             "updatedAt": "2020-11-04T14:20:17.000Z",
//             "QuestionCategoryId": 1,
//             "SurveyId": 1,
//             "SurveySectionHeaderId": 1,
//             "questionanswers": [
//                 {
//                     "id": 3,
//                     "UserId": 1,
//                     "QuestionId": 3,
//                     "response_type": "single_option_type",
//                     "question_answer_text": "PARASTATALS",
//                     "long": "23.33",
//                     "lat": "33.45",
//                     "createdAt": "2020-11-04T14:36:54.000Z",
//                     "updatedAt": "2020-11-04T14:36:54.000Z"
//                 },
//                 {
//                     "id": 8,
//                     "UserId": 1,
//                     "QuestionId": 3,
//                     "response_type": "single_option_type",
//                     "question_answer_text": "PARASTATALS",
//                     "long": "23.33",
//                     "lat": "33.45",
//                     "createdAt": "2020-11-05T16:04:30.000Z",
//                     "updatedAt": "2020-11-05T16:04:30.000Z"
//                 }
//             ]
//         },
//         {
//             "id": 4,
//             "question_text": "What do you know about unicef foundation? ",
//             "response_type": "date_type",
//             "createdAt": "2020-11-04T14:20:47.000Z",
//             "updatedAt": "2020-11-04T14:20:47.000Z",
//             "QuestionCategoryId": 1,
//             "SurveyId": 1,
//             "SurveySectionHeaderId": 1,
//             "questionanswers": [
//                 {
//                     "id": 4,
//                     "UserId": 1,
//                     "QuestionId": 4,
//                     "response_type": "date_type",
//                     "question_answer_text": "27th july, 2020",
//                     "long": "23.33",
//                     "lat": "33.45",
//                     "createdAt": "2020-11-04T14:36:54.000Z",
//                     "updatedAt": "2020-11-04T14:36:54.000Z"
//                 },
//                 {
//                     "id": 9,
//                     "UserId": 1,
//                     "QuestionId": 4,
//                     "response_type": "date_type",
//                     "question_answer_text": "27th july, 2020",
//                     "long": "23.33",
//                     "lat": "33.45",
//                     "createdAt": "2020-11-05T16:04:30.000Z",
//                     "updatedAt": "2020-11-05T16:04:30.000Z"
//                 }
//             ]
//         },
//         {
//             "id": 5,
//             "question_text": "Upload your image",
//             "response_type": "image_type",
//             "createdAt": "2020-11-04T14:21:06.000Z",
//             "updatedAt": "2020-11-04T14:21:06.000Z",
//             "QuestionCategoryId": 1,
//             "SurveyId": 1,
//             "SurveySectionHeaderId": 1,
//             "questionanswers": [
//                 {
//                     "id": 5,
//                     "UserId": 1,
//                     "QuestionId": 5,
//                     "response_type": "image_type",
//                     "question_answer_text": "image_string",
//                     "long": "23.33",
//                     "lat": "33.45",
//                     "createdAt": "2020-11-04T14:36:54.000Z",
//                     "updatedAt": "2020-11-04T14:36:54.000Z"
//                 },
//                 {
//                     "id": 10,
//                     "UserId": 1,
//                     "QuestionId": 5,
//                     "response_type": "image_type",
//                     "question_answer_text": "image_string",
//                     "long": "23.33",
//                     "lat": "33.45",
//                     "createdAt": "2020-11-05T16:04:30.000Z",
//                     "updatedAt": "2020-11-05T16:04:30.000Z"
//                 }
//             ]
//         },
//         {
//             "id": 6,
//             "question_text": "HOw many unicef branches are there?",
//             "response_type": "number_type",
//             "createdAt": "2020-11-04T14:21:25.000Z",
//             "updatedAt": "2020-11-04T14:21:25.000Z",
//             "QuestionCategoryId": 1,
//             "SurveyId": 1,
//             "SurveySectionHeaderId": 1,
//             "questionanswers": [
//                 {
//                     "id": 11,
//                     "UserId": 1,
//                     "QuestionId": 6,
//                     "response_type": "number_type",
//                     "question_answer_text": "7",
//                     "long": "23.33",
//                     "lat": "33.45",
//                     "createdAt": "2020-11-05T16:04:30.000Z",
//                     "updatedAt": "2020-11-05T16:04:30.000Z"
//                 }
//             ]
//         },
//         {
//             "id": 7,
//             "question_text": "HOw many unicef branches are there?",
//             "response_type": "text_type",
//             "createdAt": "2020-11-04T14:21:50.000Z",
//             "updatedAt": "2020-11-04T14:21:50.000Z",
//             "QuestionCategoryId": 1,
//             "SurveyId": 1,
//             "SurveySectionHeaderId": 1,
//             "questionanswers": []
//         }
//     ]
// }

export default res