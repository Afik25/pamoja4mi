from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table
from api.v1.models.mixins import TimeMixin
from typing import List, Optional
from datetime import datetime


class Subscription(SQLModel, TimeMixin, table=True):
    __tablename__ = "subscriptions"

    id: int = Field(primary_key=True, nullable=False)
    start_date: datetime = Field(sa_column=Column(
        "start_date", String, nullable=True))
    end_date: datetime = Field(sa_column=Column(
        "end_date", String, nullable=True))

    payment_id: Optional[int] = Field(
        default=None, foreign_key="payments.id", nullable=False)
    payment: Optional["Payment"] = Relationship(
        back_populates="subscription")
    
    inscription_id: Optional[int] = Field(
        default=None, foreign_key="inscriptions.id", nullable=False)
    inscription: Optional["Inscription"] = Relationship(
        back_populates="subscription")
