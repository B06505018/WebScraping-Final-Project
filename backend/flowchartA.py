# -*- coding: utf-8 -*-
"""
Created on Fri Jan  7 07:00:49 2022

@author: young
"""


class Node:
    current = None

    def __init__(self, scriptName, leftNode, rightNode):
        self.name = scriptName
        self.left = leftNode
        self.right = rightNode

    def getScript(self):
        f = open(f'scripts/{self.name}.txt', mode='r', encoding='UTF-8')
        scripts = f.readlines()
        return scripts

from .flowchartB import B_S_2,B_S_7,B_T_DM_1

##  ending
A_END_GD_1 = Node('A/ending/A_END_GD_1', None, None)

A_END_HD_1 = Node('A/ending/A_END_HD_1', None, None)
A_END_HD_2 = Node('A/ending/A_END_HD_2', None, None)

A_END_LC_1 = Node('A/ending/A_END_LC_1', None, None)

A_END_LD_1 = Node('A/ending/A_END_LD_1', None, None)
A_END_LD_2 = Node('A/ending/A_END_LD_2', None, None)
A_END_LD_3 = Node('A/ending/A_END_LD_3', None, None)

##  Late
A_L_FL_1=Node('A/Late/A_L_FL_1',A_END_LC_1,A_END_LC_1)

A_L_LCF_2=Node('A/Late/A_L_LCF_2',A_END_LC_1,A_END_LC_1)
A_L_LCF_1=Node('A/Late/A_L_LCF_1',A_L_LCF_2,A_L_FL_1)

A_L_DC_1=Node('A/Late/A_L_DC_1',A_L_LCF_1,A_L_LCF_1)

A_L_HC_1=Node('A/Late/A_L_HC_1',A_L_LCF_1,A_L_LCF_1)

A_L_LC_1=Node('A/Late/A_L_LC_1',A_L_HC_1,A_L_DC_1)

##  Trans
A_T_DM_1 = Node('A/Trans/A_T_DM_1',A_L_LC_1,A_END_LD_1)

A_T_NO_5 = Node('A/Trans/A_T_NO_5', A_END_LD_2, A_END_LD_2)
A_T_NO_4 = Node('A/Trans/A_T_NO_4', A_END_HD_2, A_END_HD_2)
A_T_NO_3 = Node('A/Trans/A_T_NO_3', A_END_LD_3, A_END_LD_3)
A_T_NO_2 = Node('A/Trans/A_T_NO_2', A_T_NO_3, A_T_NO_4)
A_T_NO_1 = Node('A/Trans/A_T_NO_1', A_T_NO_2, A_T_NO_5)

A_T_SL_3 = Node('A/Trans/A_T_SL_3',A_END_GD_1,A_END_GD_1)
A_T_SL_2 = Node('A/Trans/A_T_SL_2',A_T_SL_3,A_END_HD_1)
A_T_SL_1 = Node('A/Trans/A_T_SL_1', A_T_SL_2, A_T_SL_3)

##  Middle_I
A_MI_HI_1 = Node('A/Middle_I/A_MI_HI_1', A_T_SL_1,A_T_SL_1)

A_MI_IS_3B = Node('A/Middle_I/A_MI_IS_3B', A_T_SL_1,A_T_SL_1)
A_MI_IS_3A = Node('A/Middle_I/A_MI_IS_3A', A_T_SL_1,A_T_SL_1)
A_MI_IS_2B = Node('A/Middle_I/A_MI_IS_2B', A_MI_IS_3A,A_MI_IS_3B)
A_MI_IS_2A = Node('A/Middle_I/A_MI_IS_2A', A_MI_IS_3A,A_MI_IS_3B)
A_MI_IS_1 = Node('A/Middle_I/A_MI_IS_1', A_MI_IS_2A,A_MI_IS_2B)

A_MI_BI_2 = Node('A/Middle_I/A_MI_BI_2', A_T_DM_1,A_T_DM_1)
A_MI_BI_1 = Node('A/Middle_I/A_MI_BI_1', A_MI_IS_1,A_MI_BI_2)

A_MI_EI_3 = Node('A/Middle_I/A_MI_EI_3', A_T_DM_1,A_T_DM_1)
A_MI_EI_2 = Node('A/Middle_I/A_MI_EI_2', A_MI_IS_1,A_MI_EI_3)
A_MI_EI_1 = Node('A/Middle_I/A_MI_EI_1', A_MI_BI_1,A_MI_EI_2)

A_MI_LI_4 = Node('A/Middle_I/A_MI_LI_4', A_MI_BI_1,A_MI_BI_1)
A_MI_LI_3 = Node('A/Middle_I/A_MI_LI_3', A_MI_BI_1,A_MI_BI_1)
A_MI_LI_2 = Node('A/Middle_I/A_MI_LI_2', A_MI_EI_1,A_MI_LI_3)
A_MI_LI_1 = Node('A/Middle_I/A_MI_LI_1', A_MI_LI_2,A_MI_LI_4)

##  Middle_T
A_MT_AT_1 = Node('A/Middle_T/A_MT_AT_1', A_T_SL_1,A_T_SL_1)

A_MT_OT_1 = Node('A/Middle_T/A_MT_OT_1', A_MT_AT_1,A_MT_AT_1)

A_MT_ST_1 = Node('A/Middle_T/A_MT_ST_1', A_MT_AT_1,A_MT_AT_1)

A_MT_FT_1 = Node('A/Middle_T/A_MT_FT_1', A_MT_OT_1,A_MT_ST_1)

##  Early
A_E2_CL_5 = Node('A/Early/A_E2_CL_5', A_T_SL_1, A_T_SL_1)
A_E2_CL_4 = Node('A/Early/A_E2_CL_4', A_T_DM_1, A_T_DM_1)
A_E2_CL_3 = Node('A/Early/A_E2_CL_3', A_T_SL_1, A_T_SL_1)
A_E2_CL_2 = Node('A/Early/A_E2_CL_2', A_E2_CL_3, A_E2_CL_4)
A_E2_CL_1 = Node('A/Early/A_E2_CL_1', A_E2_CL_2, A_E2_CL_5)

A_E2_NF_5 = Node('A/Early/A_E2_NF_5', A_MI_EI_1, A_MI_EI_1)
A_E2_NF_4 = Node('A/Early/A_E2_NF_4', A_E2_NF_5, A_MI_LI_1)
A_E2_NF_3 = Node('A/Early/A_E2_NF_3', A_MI_LI_1, A_MI_LI_1)
A_E2_NF_2 = Node('A/Early/A_E2_NF_2', A_MI_HI_1, A_E2_NF_3)
A_E2_NF_1 = Node('A/Early/A_E2_NF_1', A_E2_NF_2, A_E2_NF_4)

A_E2_RC_1 = Node('A/Early/A_E2_RC_1', A_MT_FT_1, A_MT_ST_1)

A_E1_Retire_5 = Node('A/Early/A_E1_Retire_5', A_T_NO_1, A_E2_NF_1)
A_E1_Retire_4 = Node('A/Early/A_E1_Retire_4', A_E1_Retire_5, A_E2_NF_1)
A_E1_Retire_3 = Node('A/Early/A_E1_Retire_3', A_E2_RC_1, A_E1_Retire_4)
A_E1_Retire_2 = Node('A/Early/A_E1_Retire_2', None, A_E1_Retire_3)
A_E1_Retire_1 = Node('A/Early/A_E1_Retire_1', A_E2_CL_1, A_E1_Retire_2)
A_E1_Retire_2.left = A_E1_Retire_1

A_E1_Work_5 = Node('A/Early/A_E1_Work_5', A_T_NO_1, A_T_NO_1)
A_E1_Work_4 = Node('A/Early/A_E1_Work_4', A_E1_Work_5, A_E2_RC_1)
A_E1_Work_3 = Node('A/Early/A_E1_Work_3', A_E2_NF_1, A_E2_NF_1)
A_E1_Work_2 = Node('A/Early/A_E1_Work_2', A_E1_Work_3, A_E1_Work_4)
A_E1_Work_1 = Node('A/Early/A_E1_Work_1', A_E1_Retire_1, A_E1_Work_2)

##  Start
A_S_5 = Node('A/A_S_5', A_E1_Retire_1, A_E1_Retire_1)
A_S_4 = Node('A/A_S_4', A_E1_Work_1, A_S_5)
A_S_3 = Node('A/A_S_3', None, A_S_4)
A_S_2 = Node('A/A_S_2', None, A_S_3)
A_S_1 = Node('A/A_S_1', B_S_2, A_S_2)

##############################################################################
###                               Flowchart B                              ###
##############################################################################

B_S_7.left=A_T_NO_1
B_T_DM_1.left=A_L_LC_1
B_T_DM_1.right=A_END_LD_1

