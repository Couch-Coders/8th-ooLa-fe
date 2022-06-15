import React, { useState, useEffect } from 'react';
import TopBanner from '../../components/common/layout/topBanner/TopBanner.component';
import EditStudyInfoForm from '../../components/editStudyInfo/editStudyInfoForm/EditStudyInfoForm.component';

const EditStudyInfoPage = () => {
  return (
    <>
      <TopBanner title="스터디 정보 수정" info="ooLa와 함께하는 스터디" />
      <EditStudyInfoForm />
    </>
  );
};

export default EditStudyInfoPage;
