# -*- coding: utf-8 -*-
"""
Created on Sat Jan  8 03:20:57 2022

@author: young
"""

from .flowchartA import Node

##  ending
B_END_GD_1=Node('B/ending/B_END_GD_1',None,None)
B_END_HD_1=Node('B/ending/B_END_HD_1',None,None)
B_END_LD_1=Node('B/ending/B_END_LD_1',None,None)
B_END_SC_1=Node('B/ending/B_END_SC_1',None,None)

##  Trans
B_T_DM_1=Node('B/Trans/B_DM_1',None,None)

B_T_SL_5=Node('B/Trans/B_SL_5',B_END_SC_1,B_END_SC_1)
B_T_SL_4=Node('B/Trans/B_SL_4',B_END_HD_1,B_END_HD_1)
B_T_SL_3=Node('B/Trans/B_SL_3',B_T_SL_4,B_T_SL_5)
B_T_SL_2=Node('B/Trans/B_SL_2',B_END_GD_1,B_END_GD_1)
B_T_SL_1=Node('B/Trans/B_SL_1',B_T_SL_2,B_T_SL_3)

##  Middle_I
B_MI_HI_1=Node('B/Middle_I/B_HI_1',B_T_SL_1,B_T_SL_1)

B_MI_BI_3=Node('B/Middle_I/B_BI_3',B_T_DM_1,B_T_DM_1)
B_MI_BI_2=Node('B/Middle_I/B_BI_2',B_MI_HI_1,B_MI_HI_1)
B_MI_BI_1=Node('B/Middle_I/B_BI_1',B_MI_BI_2,B_MI_BI_3)

B_MI_IS_2=Node('B/Middle_I/B_IS_2',B_MI_HI_1,B_MI_HI_1)
B_MI_IS_1=Node('B/Middle_I/B_IS_1',B_MI_BI_1,B_MI_IS_2)

##  Start
B_S_8=Node('B/B_S_8',B_MI_HI_1,B_MI_IS_1)
B_S_7=Node('B/B_S_7',None,B_S_8)

B_S_6B=Node('B/B_S_6B',B_S_7,B_S_7)
B_S_6A=Node('B/B_S_6A',B_S_7,B_S_7)
B_S_6=Node('B/B_S_6',B_S_6A,B_S_6B)

B_S_5B=Node('B/B_S_5B',B_S_6,B_S_6)
B_S_5A=Node('B/B_S_5A',B_S_6,B_S_6)
B_S_5=Node('B/B_S_5',B_S_5A,B_S_5B)

B_S_4B=Node('B/B_S_4B',B_S_5,B_S_5)
B_S_4A=Node('B/B_S_4A',B_S_5,B_S_5)
B_S_4=Node('B/B_S_4',B_S_4A,B_S_4B)

B_S_3=Node('B/B_S_3',None,B_S_4)
B_S_2=Node('B/B_S_2',None,B_S_3)