import * as React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { ProjectRow } from '../ProjectRow/ProjectRow';
import image1 from '../../Assets/index/map_system.jpg'
import image2 from '../../Assets/index/forest_free_fire.jpg'
// import { useRouter } from 'next/router'

export const ProjectSection = () => {

    return (
        <Box>
            <ProjectRow dark={true}
                src={image1}
                reverse = {false}
                developed = {false}
                section={'04 - Các dự án'}
                title={'Hệ thống kiểm soát môi trường sinh thái '}
                description={'Đây là một dự án nhằm cập nhật các thông tin (Ví dụ: nhiệt độ, độ ẩm) liên tục để giúp người dùng hiểu hơn về môi trường sống của các loài động thực vật và đồng thời nắm bắt những sự thay đổi ảnh hưởng tiêu cực đến môi trường sống.'} />

                <ProjectRow dark={true}
                src={image2}
                reverse = {true}
                developed = {true}
                section={'04 - Các dự án'}
                title={'Wildfire prediction'}
                description={'Dự đoán khả năng xảy ra cháy rừng ở các khu vực để cùng các cơ quan, tổ chức đưa ra các giải pháp phù hợp để giảm thiểu tối đa tổn hại tới môi trường sống của các loài trong khu vực đó.'} />
        </Box>
    );
}
