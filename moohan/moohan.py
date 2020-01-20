#!/usr/bin/python
# -*- coding: cp949 -*-


stopper = 0


while True:
  print "< 무한루프: while문으로 구현 >"

  #########################################
  ## 이 부분이 없으면, 영원한 무한루프가 됨
  stopper += 1
  if (stopper >= 10):
    break
  #########################################
