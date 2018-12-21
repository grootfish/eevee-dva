import React from 'react';
import { connect } from 'dva';
import { Modal } from 'doraemon';


function PreorderCreateModal({ dispatch, visible, onOk }) {
  const toggleModelHandler = () => {
    dispatch({ type: 'demands/toggle', payload: { visible: !visible } });
  };
  return (
    <Modal
      title="选择需求单"
      visible={visible}
      onOk={onOk}
      onCancel={toggleModelHandler}
    >
    需求单列表
    </Modal>
  );
}
function mapStateToProps(state) {
  const { visible } = state.demands;
  return {
    visible,
  };
}

export default connect(mapStateToProps)(PreorderCreateModal);
