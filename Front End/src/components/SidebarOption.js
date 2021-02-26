import React from 'react'
import styled from "styled-components" 

function SidebarOption({ Icon, title, addCategoryOption, id }) {
    //TODO: Must add backend for following functionality
    const addCategory = () => {
        const categoryName = prompt('Please enter category name');
        if(categoryName){
    //! must grab category info here
        //db.collection('categories').add({
        // name: categoryName,
        // });
        }
    };
    const selectedCategory = () => {
    //! 
        // if(id) {
        //   dispatch(
        //       enterCategory({
        //           categoryId: id,
        //       })
        //   ); 
        // }
    };



    return (
        <SidebarOptionContainer
            onClick={addCategoryOption ? addCategory : selectedCategory}
        >
           {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}  
           {Icon ? (
               <h3>{title}</h3>
        ): (
            <SidebarOptionChannel>
                <span>#</span> {title}
            </SidebarOptionChannel>
           )}
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover{
        opactiy: 0.9;
        background-color: #0074D9;//#b37400 golden rod
    }

    > h3 {
        font-weight: 500;
    }
    
    >h3 > span {
        padding: 15px;
    }
`;
const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;

`;
